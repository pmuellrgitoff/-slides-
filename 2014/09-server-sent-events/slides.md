# server-sent events

### another weird HTTP thang

&nbsp;

Patrick Mueller
-
[`@pmuellr`](https://twitter.com/pmuellr)
-
[`muellerware.org`](http://muellerware.org)

developer advocate for IBM's [Bluemix](http://bluemix.net) PaaS

.smaller[.smaller[
<http://pmuellr.github.io/slides/2014/09-server-sent-events>
<br>
<http://pmuellr.github.io/slides/> (all slides)
]]

<div class="toolBar">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

---

layout: true

<div class="page-icon">
<span class="smaller"><span class="smaller"><tt>server-sent events</tt></span></span>
<!--
  <img height=24 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
-->
</div>

{{content}}

<div class="toolBar">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

--------------------------------------------------------------------------------

### wat

* aka `EventSource` aka `text/event-stream` resources

* like a one-way WebSocket, HTTP server to client

* **much** simpler protocol than WebSocket

* [W3C Server-Sent Events specification](http://www.w3.org/TR/eventsource/)

* more info: ["Stream Updates with Server-Sent Events" at WebPlatform.org](http://docs.webplatform.org/wiki/tutorials/eventsource_basics)



--------------------------------------------------------------------------------

### server

```js
//!snippet: server.js
```

--------------------------------------------------------------------------------

### client

```js
//!snippet: client.js
```

<span class="smaller"><span class="smaller"><tt>the server sent: 'the time is Mon Sep 22 2014 23:36:46 GMT-0400 (EDT)'</tt></span></span>

* "typed" events (type is a string)
  `source.addEventHandler("time-message", ...)`

* auto-reconnect, and "open and ""error" events

--------------------------------------------------------------------------------


### however ... ###

* no "close" or "readystatechange" events

* everywhere **BUT** IE and android < 4.4
  * see [caniuse.com's Server-sent DOM events page](http://caniuse.com/#feat=eventsource)

* polyfills available:

  * [Yaffle/EventSource](https://github.com/Yaffle/EventSource/)
  * [remy/polyfills](https://github.com/remy/polyfills/blob/master/EventSource.js)
  * [rwaldron/jquery.eventsource](https://github.com/rwaldron/jquery.eventsource)

================================================================================

class: center, middle

# `fin`
