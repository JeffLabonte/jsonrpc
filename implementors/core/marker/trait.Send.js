(function() {var implementors = {};
implementors["jsonrpc_core"] = [{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/struct.IoHandler.html\" title=\"struct jsonrpc_core::IoHandler\">IoHandler</a>&lt;M&gt;",synthetic:true,types:["jsonrpc_core::io::IoHandler"]},{text:"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/struct.MetaIoHandler.html\" title=\"struct jsonrpc_core::MetaIoHandler\">MetaIoHandler</a>&lt;T, S&gt;",synthetic:true,types:["jsonrpc_core::io::MetaIoHandler"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/struct.NoopMiddleware.html\" title=\"struct jsonrpc_core::NoopMiddleware\">NoopMiddleware</a>",synthetic:true,types:["jsonrpc_core::middleware::Noop"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/enum.RemoteProcedure.html\" title=\"enum jsonrpc_core::RemoteProcedure\">RemoteProcedure</a>&lt;T&gt;",synthetic:true,types:["jsonrpc_core::calls::RemoteProcedure"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/enum.Compatibility.html\" title=\"enum jsonrpc_core::Compatibility\">Compatibility</a>",synthetic:true,types:["jsonrpc_core::io::Compatibility"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/types/error/struct.Error.html\" title=\"struct jsonrpc_core::types::error::Error\">Error</a>",synthetic:true,types:["jsonrpc_core::types::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/error/enum.ErrorCode.html\" title=\"enum jsonrpc_core::types::error::ErrorCode\">ErrorCode</a>",synthetic:true,types:["jsonrpc_core::types::error::ErrorCode"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/id/enum.Id.html\" title=\"enum jsonrpc_core::types::id::Id\">Id</a>",synthetic:true,types:["jsonrpc_core::types::id::Id"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/params/enum.Params.html\" title=\"enum jsonrpc_core::types::params::Params\">Params</a>",synthetic:true,types:["jsonrpc_core::types::params::Params"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/types/request/struct.MethodCall.html\" title=\"struct jsonrpc_core::types::request::MethodCall\">MethodCall</a>",synthetic:true,types:["jsonrpc_core::types::request::MethodCall"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/types/request/struct.Notification.html\" title=\"struct jsonrpc_core::types::request::Notification\">Notification</a>",synthetic:true,types:["jsonrpc_core::types::request::Notification"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/request/enum.Call.html\" title=\"enum jsonrpc_core::types::request::Call\">Call</a>",synthetic:true,types:["jsonrpc_core::types::request::Call"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/request/enum.Request.html\" title=\"enum jsonrpc_core::types::request::Request\">Request</a>",synthetic:true,types:["jsonrpc_core::types::request::Request"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/types/response/struct.Success.html\" title=\"struct jsonrpc_core::types::response::Success\">Success</a>",synthetic:true,types:["jsonrpc_core::types::response::Success"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_core/types/response/struct.Failure.html\" title=\"struct jsonrpc_core::types::response::Failure\">Failure</a>",synthetic:true,types:["jsonrpc_core::types::response::Failure"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/response/enum.Output.html\" title=\"enum jsonrpc_core::types::response::Output\">Output</a>",synthetic:true,types:["jsonrpc_core::types::response::Output"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/response/enum.Response.html\" title=\"enum jsonrpc_core::types::response::Response\">Response</a>",synthetic:true,types:["jsonrpc_core::types::response::Response"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_core/types/version/enum.Version.html\" title=\"enum jsonrpc_core::types::version::Version\">Version</a>",synthetic:true,types:["jsonrpc_core::types::version::Version"]},];
implementors["jsonrpc_http_server"] = [{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_http_server/struct.ServerHandler.html\" title=\"struct jsonrpc_http_server::ServerHandler\">ServerHandler</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_http_server::handler::ServerHandler"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_http_server/struct.Response.html\" title=\"struct jsonrpc_http_server::Response\">Response</a>",synthetic:true,types:["jsonrpc_http_server::response::Response"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_http_server/struct.Rpc.html\" title=\"struct jsonrpc_http_server::Rpc\">Rpc</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_http_server::Rpc"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_http_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_http_server::ServerBuilder\">ServerBuilder</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_http_server::ServerBuilder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_http_server/struct.Server.html\" title=\"struct jsonrpc_http_server::Server\">Server</a>",synthetic:true,types:["jsonrpc_http_server::Server"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_http_server/enum.RequestMiddlewareAction.html\" title=\"enum jsonrpc_http_server::RequestMiddlewareAction\">RequestMiddlewareAction</a>",synthetic:true,types:["jsonrpc_http_server::RequestMiddlewareAction"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_http_server/enum.RestApi.html\" title=\"enum jsonrpc_http_server::RestApi\">RestApi</a>",synthetic:true,types:["jsonrpc_http_server::RestApi"]},];
implementors["jsonrpc_ipc_server"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ipc_server/struct.NoopExtractor.html\" title=\"struct jsonrpc_ipc_server::NoopExtractor\">NoopExtractor</a>",synthetic:true,types:["jsonrpc_ipc_server::meta::NoopExtractor"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ipc_server/struct.RequestContext.html\" title=\"struct jsonrpc_ipc_server::RequestContext\">RequestContext</a>&lt;'a&gt;",synthetic:true,types:["jsonrpc_ipc_server::meta::RequestContext"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ipc_server/struct.Server.html\" title=\"struct jsonrpc_ipc_server::Server\">Server</a>",synthetic:true,types:["jsonrpc_ipc_server::server::Server"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ipc_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_ipc_server::ServerBuilder\">ServerBuilder</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_ipc_server::server::ServerBuilder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ipc_server/struct.CloseHandle.html\" title=\"struct jsonrpc_ipc_server::CloseHandle\">CloseHandle</a>",synthetic:true,types:["jsonrpc_ipc_server::server::CloseHandle"]},];
implementors["jsonrpc_macros"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_macros/struct.Trailing.html\" title=\"struct jsonrpc_macros::Trailing\">Trailing</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_macros::auto_args::Trailing"]},{text:"impl&lt;T, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_macros/struct.IoDelegate.html\" title=\"struct jsonrpc_macros::IoDelegate\">IoDelegate</a>&lt;T, M&gt;",synthetic:true,types:["jsonrpc_macros::delegates::IoDelegate"]},{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_macros/pubsub/struct.Subscriber.html\" title=\"struct jsonrpc_macros::pubsub::Subscriber\">Subscriber</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_macros::pubsub::Subscriber"]},{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_macros/pubsub/struct.Sink.html\" title=\"struct jsonrpc_macros::pubsub::Sink\">Sink</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_macros::pubsub::Sink"]},];
implementors["jsonrpc_minihttp_server"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_minihttp_server/struct.Req.html\" title=\"struct jsonrpc_minihttp_server::Req\">Req</a>",synthetic:true,types:["jsonrpc_minihttp_server::req::Req"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_minihttp_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_minihttp_server::ServerBuilder\">ServerBuilder</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_minihttp_server::ServerBuilder"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_minihttp_server/struct.RpcService.html\" title=\"struct jsonrpc_minihttp_server::RpcService\">RpcService</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_minihttp_server::RpcService"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_minihttp_server/struct.RpcResponse.html\" title=\"struct jsonrpc_minihttp_server::RpcResponse\">RpcResponse</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_minihttp_server::RpcResponse"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_minihttp_server/struct.Server.html\" title=\"struct jsonrpc_minihttp_server::Server\">Server</a>",synthetic:true,types:["jsonrpc_minihttp_server::Server"]},];
implementors["jsonrpc_pubsub"] = [{text:"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_pubsub/struct.PubSubHandler.html\" title=\"struct jsonrpc_pubsub::PubSubHandler\">PubSubHandler</a>&lt;T, S&gt;",synthetic:true,types:["jsonrpc_pubsub::handler::PubSubHandler"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_pubsub/struct.Session.html\" title=\"struct jsonrpc_pubsub::Session\">Session</a>",synthetic:true,types:["jsonrpc_pubsub::subscription::Session"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_pubsub/struct.Sink.html\" title=\"struct jsonrpc_pubsub::Sink\">Sink</a>",synthetic:true,types:["jsonrpc_pubsub::subscription::Sink"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_pubsub/struct.Subscriber.html\" title=\"struct jsonrpc_pubsub::Subscriber\">Subscriber</a>",synthetic:true,types:["jsonrpc_pubsub::subscription::Subscriber"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_pubsub/enum.SubscriptionId.html\" title=\"enum jsonrpc_pubsub::SubscriptionId\">SubscriptionId</a>",synthetic:true,types:["jsonrpc_pubsub::types::SubscriptionId"]},];
implementors["jsonrpc_server_utils"] = [{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_server_utils/struct.SuspendableStream.html\" title=\"struct jsonrpc_server_utils::SuspendableStream\">SuspendableStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_server_utils::suspendable_stream::SuspendableStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_server_utils/cors/struct.Origin.html\" title=\"struct jsonrpc_server_utils::cors::Origin\">Origin</a>",synthetic:true,types:["jsonrpc_server_utils::cors::Origin"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/cors/enum.OriginProtocol.html\" title=\"enum jsonrpc_server_utils::cors::OriginProtocol\">OriginProtocol</a>",synthetic:true,types:["jsonrpc_server_utils::cors::OriginProtocol"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/cors/enum.AccessControlAllowOrigin.html\" title=\"enum jsonrpc_server_utils::cors::AccessControlAllowOrigin\">AccessControlAllowOrigin</a>",synthetic:true,types:["jsonrpc_server_utils::cors::AccessControlAllowOrigin"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/cors/enum.AccessControlAllowHeaders.html\" title=\"enum jsonrpc_server_utils::cors::AccessControlAllowHeaders\">AccessControlAllowHeaders</a>",synthetic:true,types:["jsonrpc_server_utils::cors::AccessControlAllowHeaders"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/cors/enum.AllowCors.html\" title=\"enum jsonrpc_server_utils::cors::AllowCors\">AllowCors</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_server_utils::cors::AllowCors"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_server_utils/hosts/struct.Host.html\" title=\"struct jsonrpc_server_utils::hosts::Host\">Host</a>",synthetic:true,types:["jsonrpc_server_utils::hosts::Host"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/hosts/enum.Port.html\" title=\"enum jsonrpc_server_utils::hosts::Port\">Port</a>",synthetic:true,types:["jsonrpc_server_utils::hosts::Port"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/hosts/enum.DomainsValidation.html\" title=\"enum jsonrpc_server_utils::hosts::DomainsValidation\">DomainsValidation</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["jsonrpc_server_utils::hosts::DomainsValidation"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_server_utils/reactor/struct.RpcEventLoop.html\" title=\"struct jsonrpc_server_utils::reactor::RpcEventLoop\">RpcEventLoop</a>",synthetic:true,types:["jsonrpc_server_utils::reactor::RpcEventLoop"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/reactor/enum.UninitializedExecutor.html\" title=\"enum jsonrpc_server_utils::reactor::UninitializedExecutor\">UninitializedExecutor</a>",synthetic:true,types:["jsonrpc_server_utils::reactor::UninitializedExecutor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/reactor/enum.Executor.html\" title=\"enum jsonrpc_server_utils::reactor::Executor\">Executor</a>",synthetic:true,types:["jsonrpc_server_utils::reactor::Executor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_server_utils/codecs/struct.StreamCodec.html\" title=\"struct jsonrpc_server_utils::codecs::StreamCodec\">StreamCodec</a>",synthetic:true,types:["jsonrpc_server_utils::stream_codec::StreamCodec"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_server_utils/codecs/enum.Separator.html\" title=\"enum jsonrpc_server_utils::codecs::Separator\">Separator</a>",synthetic:true,types:["jsonrpc_server_utils::stream_codec::Separator"]},];
implementors["jsonrpc_stdio_server"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_stdio_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_stdio_server::ServerBuilder\">ServerBuilder</a>",synthetic:true,types:["jsonrpc_stdio_server::ServerBuilder"]},];
implementors["jsonrpc_tcp_server"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_tcp_server/struct.Dispatcher.html\" title=\"struct jsonrpc_tcp_server::Dispatcher\">Dispatcher</a>",synthetic:true,types:["jsonrpc_tcp_server::dispatch::Dispatcher"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_tcp_server/struct.RequestContext.html\" title=\"struct jsonrpc_tcp_server::RequestContext\">RequestContext</a>",synthetic:true,types:["jsonrpc_tcp_server::meta::RequestContext"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_tcp_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_tcp_server::ServerBuilder\">ServerBuilder</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_tcp_server::server::ServerBuilder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_tcp_server/struct.Server.html\" title=\"struct jsonrpc_tcp_server::Server\">Server</a>",synthetic:true,types:["jsonrpc_tcp_server::server::Server"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_tcp_server/enum.PushMessageError.html\" title=\"enum jsonrpc_tcp_server::PushMessageError\">PushMessageError</a>",synthetic:true,types:["jsonrpc_tcp_server::dispatch::PushMessageError"]},];
implementors["jsonrpc_test"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_test/struct.Options.html\" title=\"struct jsonrpc_test::Options\">Options</a>",synthetic:true,types:["jsonrpc_test::Options"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_test/struct.Rpc.html\" title=\"struct jsonrpc_test::Rpc\">Rpc</a>",synthetic:true,types:["jsonrpc_test::Rpc"]},];
implementors["jsonrpc_ws_server"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.Error.html\" title=\"struct jsonrpc_ws_server::Error\">Error</a>",synthetic:true,types:["jsonrpc_ws_server::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.RequestContext.html\" title=\"struct jsonrpc_ws_server::RequestContext\">RequestContext</a>",synthetic:true,types:["jsonrpc_ws_server::metadata::RequestContext"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.NoopExtractor.html\" title=\"struct jsonrpc_ws_server::NoopExtractor\">NoopExtractor</a>",synthetic:true,types:["jsonrpc_ws_server::metadata::NoopExtractor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.CloseHandle.html\" title=\"struct jsonrpc_ws_server::CloseHandle\">CloseHandle</a>",synthetic:true,types:["jsonrpc_ws_server::server::CloseHandle"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.Server.html\" title=\"struct jsonrpc_ws_server::Server\">Server</a>",synthetic:true,types:["jsonrpc_ws_server::server::Server"]},{text:"impl&lt;M, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"jsonrpc_ws_server/struct.ServerBuilder.html\" title=\"struct jsonrpc_ws_server::ServerBuilder\">ServerBuilder</a>&lt;M, S&gt;",synthetic:true,types:["jsonrpc_ws_server::server_builder::ServerBuilder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_ws_server/enum.ErrorKind.html\" title=\"enum jsonrpc_ws_server::ErrorKind\">ErrorKind</a>",synthetic:true,types:["jsonrpc_ws_server::error::ErrorKind"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"jsonrpc_ws_server/enum.MiddlewareAction.html\" title=\"enum jsonrpc_ws_server::MiddlewareAction\">MiddlewareAction</a>",synthetic:true,types:["jsonrpc_ws_server::session::MiddlewareAction"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
