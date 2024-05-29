# 添加数据区块 Data Block

## 场景说明

NocoBase 有很多 `Add block` 按钮用于向界面添加区块。其中有些和数据表有关系的被成为数据区块 `Data Block`，有些和数据表无关的被称为简单区块 `Simple Block`。

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

但是目前已有的区块类型不一定满足我们的需求，我们就需要根据需求自定开发一些区块，本篇文章就是针对简单区块 `Data Block` 进行说明。

## 示例说明

本实例会创建一个 `Info` 区块，并将其添加到 `Page`、`Table` 以及移动端的 `Add block` 中。

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-data-block) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
</video>

## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-initializer-data-block
yarn pm enable @nocobase-sample/plugin-initializer-data-block
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：用于定义界面的结构和样式
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema

### 1. 实现区块组件

#### 1.1 定义区块组件

本示例要做的是一个 `Info` 区块组件，我们取名为 `InfoBlock`，其具体的需求是：

- 显示当前区块数据表名称
- 显示当前区块数据列表

首先我们新建 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件，其内容如下：

```tsx | pure
export interface InfoBlockProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const InfoBlock: FC<InfoBlockProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return <div>
    <div>collection: {collectionName}</div>
    <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: 'InfoBlock' })
```

`InfoBlock` 组件整体来说是一个被 `withDynamicSchemaProps` 包裹的函数组件，[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 是一个高阶组件，用于处理 Schema 中的的动态属性。

如果不看 `withDynamicSchemaProps` 的话，`InfoBlock` 组件就是一个简单的函数组件。

#### 1.2 注册区块组件

我们需要将 `InfoBlock` 通过插件注册到系统中。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { InfoBlock } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock })
  }
}

export default PluginInitializerDataBlockClient;
```

#### 1.3 验证区块组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `InfoBlock` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc packages/plugins/@nocobase-sample/plugin-initializer-data-block`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `InfoBlock` 组件，查看是否符合需求。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { InfoBlock } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock })

    this.app.router.add('admin.data-block', {
      path: '/admin/data-block',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <InfoBlock collectionName='test' data={[{ id: 1 }, { id: 2 }]} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerDataBlockClient;
```

然后访问 `http://localhost:13000/admin/data-block` 就可以看到对应测试页面的内容了。

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

验证完毕后需要删除测试页面。

### 2. 定义区块 Schema

#### 2.1 定义区块 Schema

NocoBase 的动态页面都是通过 Schema 来渲染，所以我们需要定义一个 Schema，后续用于在界面中添加 `InfoBlock` 区块。在实现本小节之前，我们需要先了解一些基础知识：

- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据区块

我们继续 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件，添加 `InfoBlock` 的 Schema：

```ts
export function getInfoBlockSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
        'x-use-component-props': 'useInfoBlockProps',
      }
    }
  }
}

export function useInfoBlockProps() {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}
```

这里有 2 个点需要说明：

- `getInfoBlockSchema()`：之所以定义为函数，因为 `dataSource` 和 `collection` 是动态的，由点击的数据表决定
- `useInfoBlockProps()`：用于处理 `InfoBlock` 组件的动态属性，并且因为要存到数据库，所以这里的值类型为 string 类型。

`getInfoBlockSchema()`：返回 InfoBlock 的 Schema
  - `type: 'void'`：表示没有任何数据
  - `x-decorator: 'DataBlockProvider'`：数据区块提供者，用于提供数据，更多关于 DataBlockProvider 可以查看 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
  - `x-decorator-props`：`DataBlockProvider` 的属性
    - `dataSource`：数据源
    - `collection`：数据表
    - `action: 'list'`：操作类型，这里是 `list`，获取数据列表
  - `x-component: 'CardItem'`：[CardItem 组件](https://client.docs.nocobase.com/components/card-item)，目前的区块都是被包裹在卡片中的，用于提供样式、布局和拖拽等功能
  - `properties`：子节点
    - `info`：信息区块

`useInfoBlockProps()`：InfoBlock 组件的动态属性
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：获取当前数据表，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest) 获取数据区块请求，由 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) 提供

上述 Schema 转为 React 组件后相当于：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <InfoBlock {...useInfoBlockProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 2.2 注册 scope

我们需要将 `useInfoBlockProps` 注册到系统中，这样 [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props) 才能找到对应的 scope。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { InfoBlock, useInfoBlockProps } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock })
    this.app.addScopes({ useInfoBlockProps });
  }
}

export default PluginInitializerDataBlockClient;
```

更多关于 Scope 的说明可以查看 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global)

#### 2.3 验证区块 Schema

同验证组件一样，我们可以通过临时页面验证或者文档示例验证的方式来验证 Schema 是否符合需求。我们这里以临时页面验证为例：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent, SchemaComponentOptions } from '@nocobase/client';
import { InfoBlock, getInfoBlockSchema, useInfoBlockProps } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.data-block', {
      path: '/admin/data-block',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getInfoBlockSchema({ collection: 'users' }) } }} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: getInfoBlockSchema({ collection: 'roles' }) } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerDataBlockClient;
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：用于传递 Schema 中所需的 `components` 和 `scope`，具体的可查看 [局部注册 Component 和 Scope](/plugin-samples/component-and-scope/local)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：用于渲染 Schema

![20240526170053](https://static-docs.nocobase.com/20240526170053.png)

验证完毕后需要删除测试页面。

### 3. 定义 Schema Initializer Item

我们继续修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/InfoBlock.tsx` 文件，添加 `InfoBlock` 的 Schema Initializer Item：

```ts | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info',
      icon: <CodeOutlined />,
      componentType: 'Info',
      onCreateBlockSchema({ item }) {
        insert(getInfoBlockSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
```

实现数据区块的效果核心是 DataBlockInitializer（文档 TODO）。

`infoInitializerItem`：
  - `Component`：与 [添加简单区块 Simple Block](/plugin-samples/schema-initializer/simple-block) 中使用的是 `type`，这里使用的是 `Component`，[2 种定义方式](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) 都是可以的
  - `useComponentProps`：`DataBlockInitializer` 组件的属性
    - `title`：标题
    - `icon`：图标，更多图标可以查看 [Ant Design Icons](https://ant.design/components/icon/)
    - `componentType`：组件类型，这里是 `Info`
    - `onCreateBlockSchema`：当点击数据表后的回调
      - `item`：点击的数据表信息
        - `item.name`：数据表名称
        - `item.dataSource`：数据表所属的数据源
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：提供了插入 Schema 的方法

更多关于 Schema Initializer 的定义可以参考 [Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) 文档。

### 4. 实现 Schema Settings

#### 4.1 定义 Schema Settings

一个完整的 Block 还需要有 Schema Settings，用于配置一些属性，但 Schema Settings 不是本示例的重点，所以我们这里仅有一个 `remove` 操作。

```ts
export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})
```

#### 4.2 注册 Schema Settings

```ts
import { Plugin } from '@nocobase/client';
import { infoBlockSettings } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoBlockSettings)
  }
}

export default PluginInitializerDataBlockClient;
```

#### 4.3 使用 Schema Settings

修改 `getInfoBlockSchema` 为：

```diff
export function getInfoBlockSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
+   'x-settings': infoBlockSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
        'x-use-component-props': 'useInfoBlockProps',
      }
    }
  }
}
```

### 5. 添加到 Add block 中

系统中有很多个 `Add block` 按钮，但他们的 **name 是不同的**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 5.1 添加到页面级别 Add block 中

如果我们需要添加到页面级别的 `Add block` 中，我们需要知道对应的 `name`，我们可以通过 TODO 方式查看对应的 `name`。

TODO

通过上图可以看到页面级别的 `Add block` 对应的 name 为 `page:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后我们修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx` 文件：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 5.2 添加到弹窗 Add block 中

我们不仅需要将其添加到页面级别的 `Add block` 中，还需要将其添加到 `Table` 区块 `Add new` 弹窗的 `Add block` 中。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

我们按照页面级别获取 `name` 的方式获取到 `Table` 区块的 `Add block` 的 `name` 为 `popup:addNew:addBlock`，`Data Blocks` 对应的 name 为 `dataBlocks`。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockClient;
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 5.3 添加到移动端 Add block 中

> 首先要激活移动端插件，参考 [激活插件](/welcome/getting-started/plugin#3-activate-the-plugin) 文档。

我们可以将其添加到移动端的 `Add block` 中，获取 `name` 的方法这里就不再赘述了。

然后修改 `packages/plugins/@nocobase-sample/plugin-initializer-data-block/src/client/index.tsx` 文件：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockClient;
```


如果需要更多的 `Add block`，可以继续添加，只需要知道对应的 `name` 即可。

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-initializer-data-block --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-initializer-data-block.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。