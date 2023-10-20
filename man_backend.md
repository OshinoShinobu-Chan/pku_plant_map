# 后端开发文档
## 模块和对象
### `Response`包

>1.`Response`类
>
>>`String makeResponse(boolean status, String msg, String data)`
>>
>>将`json`风格的字符串`data`转换成统一的响应格式。统一响应格式中`status`表示状态，`0`表示成功，`1`表示失败，`2`表示警告，`msg`是由服务器返回的提示信息，一般情况下成功会返回`OK`，失败会返回失败的原因，`data`是一个`json`对象，其中封装了返回的数据。
>>```javascript
>>{
>>    status:0,
>>    msg:"",
>>    data:{
>>    
>>    }
>>}
>>```
>>
>> `String success(String data)`
>>
>> 返回成功的结果，`status`被自动设置为`0`，`msg`被自动设置为`OK`。
>>
>> `String failed(String msg)`
>>
>> 返回失败的结果，`status`被自动设置为`1`，`data`为`null`。

### `Entity` 包

> 1.`WithId`类
> 
> 所有拥有`id`属性的类的父类，是一个抽象类且是一个泛型类，其中的泛型限`T`定为整数，即`Byte`, `Short`, `Integer`, `Long`。其中的方法都定义在相应的接口中，下同。
>
>> `Withid()`
>>
>> 无参构造函数。
>>
>> `WithId(T id)`
>>
>> 完整参数构造函数。
>>
>> `T getId()`
>>
>> 返回`id`属性。
>>
>> `void setId(T id)`
>>
>> 设置`id`属性。
>
> 2.`WithName`类
>
> 继承`WithId`类，是一个抽象类，作为有`name`属性的类的父类。
>
>> `WithName()`
>>
>> 无参构造函数。
>>
>> `WithName(String name_zh, String name_en, String name_la)`
>>
>> 不包含`id`的构造函数。
>>
>> `WithName(T id, String name_zh, String name_en, String name_la)`
>>
>> 完整参数构造函数。
>>
>> `String getName_zh()`
>>
>> 返回`name_zh`属性，即中文名称。
>>
>> `void setName_zh(String name_zh)`
>>
>> 设置`name_zh`属性
>>
>> `String getName_en()`
>>
>> 返回`name_en`属性，即英文名称。
>>
>> `void setName_en(String name_en)`
>>
>> 设置`name_en`属性。
>>
>> `String getName_la()`
>>
>> 返回`name_la`属性，即拉丁名称。
>>
>> `void setName_la(String name_la)`
>>
>> 设置`name_la`属性。
>
> 3.`WithUrl`类
>
> 继承`WithId`类，是一个抽象类，作为有`url`属性的类的父类。
>
>> `WithUrl()`
>>
>> 无参构造函数。
>>
>> `WithUrl(String url)`
>>
>> 不包含`id`的构造函数。
>>
>> `WithUrl(T id, String url)`
>>
>> 完整参数构造函数。
>> 
>> `String getUrl()`
>>
>> 返回`url`属性。
>>
>> `void setUrl(String url)`
>>
>> 设置`url`属性。
>
> 4.`WithPlantId`类
>
> 抽象类，作为有`plant_id`属性的类的父类。
>
>> `WithPlantId()`
>>
>> 无参构造函数。
>>
>> `WithPlantId(Short plant_id)`
>>
>> 完整参数构造函数。
>>
>> `Short getPlant_id()`
>> 
>> 返回`plant_id`属性。
>>
>> `void setPlant_id(Short plant_id)`
>>
>> 设置`plant_id`属性。
>
> 5.`WithUpdateTime`类
>
> 继承`WithId`类，抽象类，作为有`update_time`属性的类的父类。
>
>> `WithUpdateTime()`
>>
>> 无参构造函数。
>>
>> `WithUpdateTime(Long update_time)`
>>
>> 不包含`id`的构造函数，如果不指定`update_time`则根据系统时间自动设定。
>>
>> `WithUpdateTime(T id, Long update_time)`
>>
>> 完整参数构造函数，如果不指定`update_time`则根据系统时间自动设定。
>>
>> `Long getUpdate_time()`
>>
>> 返回`update_time`属性。
>>
>> `void setUpdate_time(Long update_time)`
>>
>> 设置`udpate_time`属性，如果不指定`update_time`参数，则根系统系统时间自动设定。
>
> 6.`WithModifyTime`类
> 
> 继承`WithUpdateTime`类，抽象类，作为有`modify_time`属性的类的父类。
>
>> `WithModifyTime()`
>> 
>> 无参构造函数。
>>
>> `WithModifyTime(Long update_time, Long modify_time)`
>>
>> 不包含`id`属性的构造函数，如果不指定`update_time`或`modify_time`属性，则根据系统时间自动设定。
>>
>> `WithModifyTime(T id, Long update_time, Long modify_time)`
>>
>> 完整参数构造函数，如果不指定`update_time`或`modify_time`属性，则根据系统时间自动设定。
>>
>> `Long getModify_time()`
>>
>> 返回`modify_time`属性。
>>
>> `void setModify_time(Long modify_time)`
>>
>> 设置`modify_time`属性，如果不指定`modify_time`属性，则根据系统时间自动设定。。
>
> 7.`Plant`类
>
> 植物基本信息的一个聚合数据类，继承`Withname`类，并初始化`WithName`类的泛型`T`为`Short`。
>
>> `Plant()`
>>
>> 无参构造函数。
>>
>> `Plant(Short id)`
>>
>> 构造函数，参数`id`为植物的`id`。
>>
>> `Plant(String name, Category category, String name_en, String name_la)`
>>
>> 不包括`id`属性的构造函数，在上传的数据库的时候会自动设置`id`并回显，下同。
>>
>> `Plant(Short id, String name, Category category, String name_en, String name_la)`
>>
>> 完整参数的构造方法。
>>
>> `Category getCategory()`
>>
>> 返回`cateagory`属性，即这种植物的生物学分类。
>>
>> `void setCategory(Category category)`
>> 
>> 设置`category`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 8.`Picture`类
> 
> 上传到服务器上的植物图片的基本信息的一个聚合数据类，继承`WithUpdateTime`类,`WithUrl`类和`WithPlantId`类，并初始化泛型`T`为`Integer`。
>
>> `Picture()`
>>
>> 无参构造函数。
>>
>> `Picture(Integer id)`
>>
>> 构造函数，参数`id`为图片的`id`。
>>
>> `Picture(Integer plant_id, String url, String comment, Short src, Point location, String ip, Long update_time)`
>>
>> 不包括`id`属性的构造函数，如果不指定`update_time`或`modify_time`属性，则根据系统时间自动设定。
>>
>> `Picture(Integer id, Short plant_id, String url, String comment, Point location, Short src, String ip, Long update_time)`
>>
>> 完整参数构造函数，如果不指定`update_time`或`modify_time`属性，则根据系统时间自动设定。
>>
>> `String getComment()`
>>
>> 返回`comment`属性，即图片的简短描述。
>>
>> `void setComment(String comment)`
>>
>> 设置`comment`属性。
>>
>> `Short getSrc()`
>>
>> 返回`src`属性，即图片的来源，0表示图片由普通用户上传，1表示图片由管理员上传。
>>
>> `void setSrc(Short src)`
>>
>> 设置`src`属性。
>>
>> `Point getLocation()`
>>
>> 返回`location`属性，即图片的拍摄位置，不一定每个图片都有这个属性，一些可能是`null`。位置坐标封装在`Point`类中。
>> 
>> `void setLocation(Point location)`
>> 
>> 设置`location`属性。
>> 
>> `String getIp()`
>>
>> 返回`ip`属性，即图片上传者的ip地址。
>> 
>> `void setIp(String ip)`
>>
>> 设置`ip`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 9.`IBPage`类
>
> 图鉴页面内容基本信息的一个聚合数据类，继承`WithModifyTime`类和`WithUrl`类，并初始化`WithModifyTime`类和`WithUrl`类的泛型`T`为`Short`类型，其中`url`属性对应的是一个`json`文件，包含`url`，即图鉴中图片的路径，和`content`，即图鉴中的文字，这两个键值。
>
>> `IBPage()`
>> 
>> 无参构造函数。
>>
>> `IBPage(boolean cate, Short id)`
>>
>> 当`cate`参数为`true`时通过页面`id`构造，否则通过`plant_id`构造。
>>
>> `IBPage(short plant_id, String url, Long update_time, Long modify_time)`
>>
>> 不包含`id`的构造函数，如果不指定`update_time`或`modify_time`则使用系统时间自动设置。
>>
>> `IBPlant(Short id, Short plant_id, Long update_time, Long modify_time)`
>>
>> 完整参数的构造函数，如果不指定`update_time`或`modify_time`则使用系统时间自动设置。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 10.`Location`类
> 
> 植物分布信息的一个聚合数据类，继承`WithPlantId`类。
>
>> `Location()`
>>
>> 无参构造函数。
>>
>> `Location(int plant_id)`
>> 
>> 构造函数，参数`plant_id`是植物的`id`。
>> 
>> `Location(int plant_id, list<Point> locations)`
>> 
>> 完整参数的构造函数。
>> 
>> `list<DistributionPoint> getLocations(Int resolution)`
>> 
>> 当`resolution`参数为0时返回`locations`属性，即植物的所有分布点。否则根据`resolution`将地图分成网格，同一个网格中的分布点合成一个大的分布点，体现在`Point`的`size`属性中，其中`resolution`的单位是经纬度的秒数。
>> 
>> `void setLocations(list<SidtributionPoint> locations)`
>>
>> 设置`locations`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 11.`Route`类
>
> 游览路线信息的聚合数据类，继承`WithModifyTime`类和`WithUrl`类，并初始化泛型`T`为`Short`类型。
>
>> `Route()`
>> 
>> 无参构造函数。
>> 
>> `Route(Short id)`
>>
>> 构造函数，`id`参数为路线的`id`
>> 
>> `Route(Boolean status, String url, Long update_time, Long modify_time)`
>>
>> 不包含`id`的构造函数，如果不指定`update_time`或`modify_time`则使用系统时间自动设定。
>>
>> `Boolean getStatus()`
>>
>> 返回`status`属性，`true`表示这条路线是当前的推荐路线。
>>
>> `void setStatus(Boolean status)`
>>
>> 设置`status`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>>
> 11.5.`RouteDoc`类
>
> 游览路径详情信息的聚合类，继承`WithModifyTime`类和`WithUrl`类，并初始化泛型`T`为`Short`类型。
>
>> `RouteDoc()`
>>
>> 无参构造函数。
>>
>> `RouteDoc(Short id)`
>>
>> 构造函数，`id`是游览路径详情的`id`。
>>
>> `RouteDoc(Short route_id, String url, Long update_time, Long modify_time)`
>>
>> 不包含`id`的构造函数。
>>
>> `RouteDoc(Short id, Short route_id, String url, Long update_time, Long modify_time)`
>>
>> 完整参数的构造函数。
>>
>> `Short getRoute_id()`
>>
>> 返回`route_id`属性，即与之对应的游览路径的`id`。
>>
>> `void setRoute_id(Short id)`
>>
>> 设置`route_id`属性。
>>
>> `String toString()`
>>
>> 返回这个类型的`json`风格字符串。
>
> 12.`SingleCategory`类
>
> 分类信息中单个项（例如植物所属的科的信息）的数据聚合类，继承`WithName`类。
>
>> `SingleCategory()`
>>
>> 无参构造函数。
>>
>> `SingleCategory(Short id, Short level)`
>>
>> 构造函数，包含`id`属性和`level`属性，即这个项在分类学中的层次，使用本类中的常数`PHYLUM`, `CLASS`, `ORDER`, `FAMILY`, `GENUS`。其他的属性会在调用相应的`get`方法时从数据库中获取。
>>
>> `SingleCategory(String name_zh, String name_en, String name_la, Short level)`
>> 
>> 不包含`id`属性的构造函数。
>>
>> `SingleCategory(Integer id, String name_zh, String name_en, String name_la, Short level)`
>>
>> 完整参数构造函数。
>>
>> `Short getLevel()`
>>
>> 返回`level`属性。
>>
>> `void setLevel()`
>>
>> 设置`level`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 13.`Category`类
>
> 植物的生物学分类信息的聚合类。
>
>> `Category()`
>>
>> 无参构造函数。
>>
>> `Category(list<SingleCategory> category)`
>>
>> 使用单项分类信息列表进行构造，如果列表的中元素不匹配会抛出异常（异常的种类未定）。
>>
>> `Category(SingleCategory phylum, SingleCategory class, SingleCategory order, SingleCategory family, SingleCategory genus)`
>>
>> 完整参数构造函数。
>>
>> `SingleCategory getPhylum()`
>>
>> 返回`phylum`属性。
>>
>> `void setPhylum(SingleCategory phylum)`
>>
>> 设置`phylum`属性。
>>
>> `SingleCategory getClass()`
>>
>> 返回`class`属性。
>>
>> `void setClass(SingleCategory class)`
>>
>> 设置`class`属性。
>>
>> `SingleCategory getOrder()`
>>
>> 返回`order`属性。
>>
>> `void setOrder(SingleCategory order)`
>>
>> 设置`order`属性。
>>
>> `SingleCategory getFamily()`
>>
>> 返回`family`属性。
>>
>> `void setFamily(SingleCategory family)`
>>
>> 设置`family`属性。
>>
>> `SingleCategory getGenus()`
>>
>> 返回`genus`属性。
>>
>> `void setGenus(SingleCategory genus)`
>>
>> 设置`genus`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 14.`Point`类
>
> 地图上坐标点数据的聚合类。
>
>> `Point()`
>>
>> 无参构造函数
>>
>> `Point(Double longitude, Double latitude)`
>>
>> 完整参数的构造函数。
>>
>> `Double getLongitude()`
>>
>> 返回`longitude`属性，即经度信息。
>>
>> `void setLongitude(Double longitude)`
>>
>> 设置`longitude`属性。
>>
>> `Double getLatitude()`
>>
>> 返回`latitude`属性，即纬度信息。
>>
>> `void setLatitude(Double latitude)`
>>
>> 设置`latitude`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 15.`DistributionPoint`类
>
> 植物分布点信息的聚合类，继承`Point`类和`WithUpdateTime`，并初始化泛型`T`为`Integer`。重载了加法，可以用于将多个距离比较近的函数聚合在一起。
>
>> `DistributionPoint()`
>>
>> 无参构造函数。
>>
>> `DistributionPoint(Integer id, Double longitude, Double latitude, Integer size, Long update_time, Long modify_time)`
>>
>> 完整参数构造函数，如果不指定`update_time`或`modify_time`属性，则根据系统时间自动设定。
>>
>> `Integer getSize()`
>>
>> 返回`Size`属性，即这个分布点是由多少个分布点合成的。
>>
>>
>> `void setSize(Integer Size)`
>>
>> 设置`size`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 16.`RocognitionResult`类
>
> 图像识别结果封装类。
>
>> `RecognitionResult()`
>>
>> 无参构造函数。
>>
>> `RecognitionResult(Short plant_id, Double confidence)`
>>
>> 完整参数构造函数。
>>
>> `Short getPlant_id()`
>>
>> 返回`plant_id`属性。
>>
>> `void setPlant_id(Short id)`
>>
>> 设置`plant_id`属性。
>>
>> `Double getConfidence()`
>>
>> 设置`confidence`属性。
>>
>> `void setConfidence(Double confidence)`
>>
>> 设置`confidence`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。
>
> 17.`SearchResult`类
>
> 搜索结果的封装类。
>
>> `SearchResult()`
>>
>> 无参构造函数。
>>
>> `SearchResult(Integer sum, list<Object> result)`
>>
>> 完整参数构造函数。
>>
>> `Interger getSum()`
>>
>> 返回`sum`属性。
>>
>> `void setSum(Integer sum)`
>>
>> 设置`sum`属性。
>>
>> `list<Object> getResult()`
>>
>> 返回`result`属性。
>>
>> `void setResult(list<Object> result)`
>>
>> 设置`result`属性。
>>
>> `String toString()`
>>
>> 返回这个类的`json`风格字符串。

### `Controller`包

> 1.`IBController`接口
> 
> 图鉴功能的控制层接口（用户分享不包含在其中，管理员对图鉴的相关操作方法请继承这个类）
>
>> `String getContent(Short plant_id)`
>>
>> 请求路径：`/IB/content`，请求方法：`GET`，请求参数与函数参数列表匹配，下同。
>>
>> 返回封装在`IBPage`类中的图鉴内容的相关数据。
>>
>> `String searchbyPlantName_zh(String name)`
>>
>> 请求路径：`/IB/plant/name/zh`，请求方法：`GET`。
>>
>> 根据植物的中文名称搜索，返回封装在`SearchResult`类中的搜索结果，每个植物的数据使用`Plant`类封装。
>>
>> `String searchbyPlantName_en(String name)`
>>
>> 请求路径：`/IB/plant/name/en`，请求方法：`GET`。
>>
>> 根据植物的英文名称搜索，返回封装在`SearchResult`类中的搜索结果，每个植物数据使用`Plant`类封装。
>>
>> `String searchbyPlantName_la(String name)`
>>
>> 请求路径：`/IB/plant/name/la`，请求方法：`GET`。
>>
>> 根据植物的拉丁文名称搜索，返回封装在`SearchResult`类中的搜索结果，每个植物数据使用`Plant`类封装。
>>
>> `String searchbyPlantCategory_zh(String category)`
>>
>> 请求路径：`/IB/plant/category/zh`，请求方法：`GET`。
>>
>> 根据植物的生物学分类中的某个层次的中文名称进行匹配搜索，返回封装在`SearchResult`类中的搜索结果，每个植物数据使用`Plant`类封装。
>>
>> `String searchbyPlantCategory_en(String category)`
>>
>> 请求路径：`/IB/plant/category/en`，请求方法：`GET`。
>>
>> 根据植物的生物学分类中的某个层次的英文名称进行匹配搜索，返回封装在`SearchResult`类中的搜索结果，每个植物数据使用`Plant`类封装。
>>
>> `String searchbyPlantCategory_la(String category)`
>>
>> 请求路径：`/IB/plant/category/la`，请求方法：`GET`。
>>
>> 根据植物的生物学分类中的某个层次的拉丁名称进行匹配搜索，返回封装在`SearchResult`类中的搜索结果，每个植物数据使用`Plant`类封装。
>>
>> `String searchbyPlantid(Short id)`
>>
>> 请求路径：`/IB/plant/id`，请求方法：`GET`
>>
>> 根据植物的`id`搜索，返回封装在`Plant`类中的结果。
>
> 2.`DistrbutionController`接口
> 
> 有关植物分布点功能的控制层接口。
>
>> `String getDistribution(Short id, Point rangeX, Point rangeY, Integer resolution)`
>>
>> 请求路径：`/distibution`，请求方法：`GET`
>>
>> 返回对应`id`的植物的分布点，结果封装在`SearchResult`中。
>
> 3.`RouteController`接口
>
> 有关游览路径功能的控制层接口。
>
>> `String getRoute(Short id)`
>>
>> 请求路径：`/route`，请求方法：`GET`
>>
>> 返回对应`id`的游览路径（不是游览路径详情）信息，结果封装在`Route`中。
>>
>> `String getRouteNow()`
>>
>> 请求路径：`/route/now`，请求方法：`GET`
>>
>> 返回`status`为`true`，也就是当前推荐的游览路径，结果封装在`Route`中。
>>
>> `String getRouteDoc(Short id)`
>>
>> 请求路径：`/route/doc`，请求方法：`GET`
>>
>> 返回对应`id`的游览路径的详情，结果封装在`RouteDoc`中。
>>
>> `String getRouteDocbyId(Short id)`
>> 
>> 请求路径：`/route/doc/id`，请求方法：`GET`
>>
>> 返回对应`id`的游览路径详情，结果封装在`RouteDoc`中。
>>
>> `String getRouteDocNow()`
>>
>> 请求路径：`/route/doc/now`，请求方法：`GET`
>>
>> 返回当前推荐路径的详情，结果封装在`RouteDoc`中。
>
> 4.`RecognitionController`接口
>
> 有关拍照识别的控制层接口。
>
>> `String getResult(String url)`
>>
>> 请求路径：`/recognition`，请求方法：`GET`
>>
>> 返回置信度最高的一个识别结果，结果封装在`RecognitionResult`中。
>>
>> `String getResults(String url, Short n)`
>>
>> 请求路径：`/resognition/results`，请求方法：`GET`
>>
>> 返回置信度排名前`n`的识别结果，如果识别结果总数不足`n`则返回全部识别结果，结果封装在`SearchResult`中。
>
> 5.`UserShareController`接口
>
> 关于用户分享功能的控制层接口。
>
>> `String getUserShares(Short plant_id, Short page, Short perpage)`
>>
>> 请求路径：`/usershare`，请求方法：`GET`
>>
>> 返回用户分享的内容，包括管理员上传的图片。采用分页表示，`page`表示页数，`perpage`表示每页展示的条数，结果封装在`SearchResult`中。
>>
>> `String postUserShares(Picture picture)`
>>
>> 请求路径：`/usershare`，请求方法：`POST`
>>
>> 上传一个用户分享的内容，返回结果中`data`为`null`，只用于表示操作是否成功。