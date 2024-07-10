(function() {var implementors = {
"dynlink":[["impl !Crossing for <a class=\"struct\" href=\"dynlink/struct.DynlinkError.html\" title=\"struct dynlink::DynlinkError\">DynlinkError</a>",1,["dynlink::error::DynlinkError"]],["impl !Crossing for <a class=\"enum\" href=\"dynlink/enum.DynlinkErrorKind.html\" title=\"enum dynlink::DynlinkErrorKind\">DynlinkErrorKind</a>",1,["dynlink::error::DynlinkErrorKind"]],["impl Crossing for <a class=\"enum\" href=\"dynlink/enum.HeaderError.html\" title=\"enum dynlink::HeaderError\">HeaderError</a>",1,["dynlink::error::HeaderError"]],["impl&lt;Backing&gt; !Crossing for <a class=\"struct\" href=\"dynlink/compartment/struct.Compartment.html\" title=\"struct dynlink::compartment::Compartment\">Compartment</a>&lt;Backing&gt;",1,["dynlink::compartment::Compartment"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/compartment/struct.CompartmentId.html\" title=\"struct dynlink::compartment::CompartmentId\">CompartmentId</a>",1,["dynlink::compartment::CompartmentId"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/context/engine/struct.LoadDirective.html\" title=\"struct dynlink::context::engine::LoadDirective\">LoadDirective</a>",1,["dynlink::context::engine::LoadDirective"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/context/engine/struct.LoadFlags.html\" title=\"struct dynlink::context::engine::LoadFlags\">LoadFlags</a>",1,["dynlink::context::engine::LoadFlags"]],["impl !Crossing for <a class=\"struct\" href=\"dynlink/context/runtime/struct.RuntimeInitInfo.html\" title=\"struct dynlink::context::runtime::RuntimeInitInfo\">RuntimeInitInfo</a>",1,["dynlink::context::runtime::RuntimeInitInfo"]],["impl&lt;Engine&gt; !Crossing for <a class=\"struct\" href=\"dynlink/context/struct.Context.html\" title=\"struct dynlink::context::Context\">Context</a>&lt;Engine&gt;",1,["dynlink::context::Context"]],["impl&lt;Backing&gt; !Crossing for <a class=\"enum\" href=\"dynlink/context/enum.LoadedOrUnloaded.html\" title=\"enum dynlink::context::LoadedOrUnloaded\">LoadedOrUnloaded</a>&lt;Backing&gt;",1,["dynlink::context::LoadedOrUnloaded"]],["impl&lt;'a, Engine&gt; !Crossing for <a class=\"struct\" href=\"dynlink/context/struct.LibraryIter.html\" title=\"struct dynlink::context::LibraryIter\">LibraryIter</a>&lt;'a, Engine&gt;",1,["dynlink::context::LibraryIter"]],["impl !Crossing for <a class=\"struct\" href=\"dynlink/engines/twizzler/struct.Backing.html\" title=\"struct dynlink::engines::twizzler::Backing\">Backing</a>",1,["dynlink::engines::twizzler::Backing"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/engines/twizzler/struct.Engine.html\" title=\"struct dynlink::engines::twizzler::Engine\">Engine</a>",1,["dynlink::engines::twizzler::Engine"]],["impl !Crossing for <a class=\"struct\" href=\"dynlink/library/struct.UnloadedLibrary.html\" title=\"struct dynlink::library::UnloadedLibrary\">UnloadedLibrary</a>",1,["dynlink::library::UnloadedLibrary"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/library/struct.LibraryId.html\" title=\"struct dynlink::library::LibraryId\">LibraryId</a>",1,["dynlink::library::LibraryId"]],["impl&lt;Backing&gt; !Crossing for <a class=\"struct\" href=\"dynlink/library/struct.Library.html\" title=\"struct dynlink::library::Library\">Library</a>&lt;Backing&gt;",1,["dynlink::library::Library"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/library/struct.CtorInfo.html\" title=\"struct dynlink::library::CtorInfo\">CtorInfo</a>",1,["dynlink::library::CtorInfo"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/library/struct.SecgateInfo.html\" title=\"struct dynlink::library::SecgateInfo\">SecgateInfo</a>",1,["dynlink::library::SecgateInfo"]],["impl&lt;'lib, Backing&gt; !Crossing for <a class=\"struct\" href=\"dynlink/symbol/struct.RelocatedSymbol.html\" title=\"struct dynlink::symbol::RelocatedSymbol\">RelocatedSymbol</a>&lt;'lib, Backing&gt;",1,["dynlink::symbol::RelocatedSymbol"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/symbol/struct.LookupFlags.html\" title=\"struct dynlink::symbol::LookupFlags\">LookupFlags</a>",1,["dynlink::symbol::LookupFlags"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/tls/struct.TlsModule.html\" title=\"struct dynlink::tls::TlsModule\">TlsModule</a>",1,["dynlink::tls::TlsModule"]],["impl&lt;T&gt; !Crossing for <a class=\"struct\" href=\"dynlink/tls/struct.Tcb.html\" title=\"struct dynlink::tls::Tcb\">Tcb</a>&lt;T&gt;",1,["dynlink::tls::Tcb"]],["impl Crossing for <a class=\"struct\" href=\"dynlink/tls/struct.TlsModId.html\" title=\"struct dynlink::tls::TlsModId\">TlsModId</a>",1,["dynlink::tls::TlsModId"]],["impl !Crossing for <a class=\"struct\" href=\"dynlink/tls/struct.TlsRegion.html\" title=\"struct dynlink::tls::TlsRegion\">TlsRegion</a>",1,["dynlink::tls::TlsRegion"]]],
"monitor_api":[["impl !Crossing for <a class=\"struct\" href=\"monitor_api/struct.SharedCompConfig.html\" title=\"struct monitor_api::SharedCompConfig\">SharedCompConfig</a>",1,["monitor_api::SharedCompConfig"]],["impl !Crossing for <a class=\"struct\" href=\"monitor_api/struct.TlsTemplateInfo.html\" title=\"struct monitor_api::TlsTemplateInfo\">TlsTemplateInfo</a>",1,["monitor_api::TlsTemplateInfo"]],["impl Crossing for <a class=\"struct\" href=\"monitor_api/struct.LibraryInfo.html\" title=\"struct monitor_api::LibraryInfo\">LibraryInfo</a>"]],
"secgate":[],
"twz_rt":[["impl Crossing for <a class=\"struct\" href=\"twz_rt/struct.CompartmentInitInfo.html\" title=\"struct twz_rt::CompartmentInitInfo\">CompartmentInitInfo</a>",1,["twz_rt::runtime::core::CompartmentInitInfo"]],["impl !Crossing for <a class=\"struct\" href=\"twz_rt/struct.RuntimeThreadControl.html\" title=\"struct twz_rt::RuntimeThreadControl\">RuntimeThreadControl</a>",1,["twz_rt::runtime::thread::tcb::RuntimeThreadControl"]],["impl Crossing for <a class=\"enum\" href=\"twz_rt/enum.RuntimeError.html\" title=\"enum twz_rt::RuntimeError\">RuntimeError</a>",1,["twz_rt::error::RuntimeError"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()