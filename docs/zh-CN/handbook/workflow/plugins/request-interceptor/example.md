# 示例

结合上面基本的使用说明，我们以一个“订单提交”场景为例，假设我们需要在用户提交订单时，对用户选择的所有产品库存进行校验，如果任意一个所选产品库存不足，则拦截该订单的提交，并返回相应的提示信息；循环检测每个产品直到所有产品的库存都充足，则通过，为用户生成订单数据。

其他步骤与说明中的相同，但由于一个订单要针对多个商品，除了在数据建模时增加“订单” <-- m:1 -- “订单详情” -- 1:m --> “产品” 的多对多关系外，还需要在“操作前事件”工作流中增加一个“循环”节点，用于循环检测每个产品的库存是否充足：

![示例_循环检测流程](https://static-docs.nocobase.com/8307de47d5629595ab6cf00f8aa898e3.png)

循环的对象选择为提交的订单数据中的“订单详情”数组：

![示例_循环对象配置](https://static-docs.nocobase.com/ed662b54cc1f5425e2b472053f89baba.png)

循环流程中的条件判断节点用于判断当前循环产品对象的库存是否充足：

![示例_循环中的条件判断](https://static-docs.nocobase.com/4af91112934b0a04a4ce55e657c0833b.png)

其他配置与基本使用中的配置相同，最终提交订单时，如果任意一个产品库存不足，则会拦截订单提交，并返回相应的提示信息。测试时也尝试在一个订单内提交多个产品，其中一个产品库存不足，另一个产品库存充足，可以看到返回的响应消息：

![示例_提交后的响应消息](https://static-docs.nocobase.com/dd9e81084aa237bda0241d399ac19270.png)

可以看到，响应消息中并未提示第一个产品“iPhone 15 pro”的库存不足，而只提示了第二个产品“iPhone 14 pro”的库存不足，这是因为在循环中，第一个产品库存充足，所以不会拦截，而第二个产品库存不足，所以拦截了订单提交。