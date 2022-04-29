"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81198],{99481:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-c73145dc",path:"/devices/ZNMS12LM.html",title:"Xiaomi ZNMS12LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNMS12LM control via MQTT",description:"Integrate your Xiaomi ZNMS12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"State (binary)",slug:"state-binary",children:[]},{level:3,title:"Reverse (binary)",slug:"reverse-binary",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNMS12LM.md",git:{updatedTime:1651264357e3}}},26912:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var a=o(66252);const d=(0,a.uE)('<h1 id="xiaomi-znms12lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-znms12lm" aria-hidden="true">#</a> Xiaomi ZNMS12LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNMS12LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara S2 lock</td></tr><tr><td>Exposes</td><td>battery, voltage, battery_low, state, reverse, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNMS12LM.jpg" alt="Xiaomi ZNMS12LM"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,a.Uk)("This device supports OTA updates, for more information see "),r=(0,a.Uk)("OTA updates"),c=(0,a.Uk)("."),n=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),s=(0,a.Uk)("How to use device type specific configuration"),l=(0,a.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> state is ON, if <code>LOCK</code> OFF.</p><h3 id="reverse-binary" tabindex="-1"><a class="header-anchor" href="#reverse-binary" aria-hidden="true">#</a> Reverse (binary)</h3><p>Value can be found in the published state on the <code>reverse</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> reverse is ON, if <code>LOCK</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>finger_not_match</code>, <code>password_not_match</code>, <code>reverse_lock</code>, <code>reverse_lock_cancel</code>, <code>locked</code>, <code>lock_opened</code>, <code>finger_add</code>, <code>finger_delete</code>, <code>password_add</code>, <code>password_delete</code>, <code>lock_opened_inside</code>, <code>lock_opened_outside</code>, <code>ring_bell</code>, <code>change_language_to</code>, <code>finger_open</code>, <code>password_open</code>, <code>door_closed</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),u={},h=(0,o(83744).Z)(u,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[i,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[r])),_:1}),c]),n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[s])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);