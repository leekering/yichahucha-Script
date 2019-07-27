### surge
```
[Script]
http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2/(statuses\/(unread|extend|positives/get|friends\/timeline)|stories\/(video_stream|home_list)|groups\/timeline|fangle\/timeline|profile\/statuses|comments\/build_comments|photo\/recommend_list|service\/picfeed|searchall) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js,requires-body=true
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js,requires-body=true

[MITM]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```
### quan-x
```
[rewrite_local]
^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2/(statuses\/(unread|extend|positives/get|friends\/timeline)|stories\/(video_stream|home_list)|groups\/timeline|fangle\/timeline|profile\/statuses|comments\/build_comments|photo\/recommend_list|service\/picfeed|searchall) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js

[mitm]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```
or
```
[rewrite_remote]
https://gist.githubusercontent.com/yichahucha/f029340c06414b35222e28d8a9f94fe1/raw/12af6eb17880d32b94db705dc66989a1eb252103/rewrite.txt, tag=wb, enabled=true
```
