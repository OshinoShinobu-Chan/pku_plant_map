# 数据库模块开发文档
## 数据库表结构
下面是数据库中的表和每个表中的字段以及字段的类型和约束，下面所有的整数类型都使用无符号数，类型中的`unsigned`省略。
1. `tb_plantname`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id`    | `smallint` | `primary key` | 每种植物的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 植物的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 植物的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 植物的拉丁名称 |

2. `tb_category`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类组合的唯一标识 |
| `plant_id` | `smallint` | `unique` | 与之对应的植物`id` |
| `phylum` | `smallint` | `unique` | 门，使用`id`表示 | 
| `class` | `smallint` | `unique` | 纲，使用`id`表示 | 
| `order` | `smallint` | `unique` | 目，使用`id`表示 |
| `family` | `smallint` | `unique` | 科，使用`id`表示 |
| `genus` | `smallint` | `unique` | 属，使用`id`表示 |

3. `tb_phylum`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 分类的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 分类的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 分类的拉丁名称 |

4. `tb_class`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 分类的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 分类的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 分类的拉丁名称 |

5. `tb_order`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 分类的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 分类的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 分类的拉丁名称 |

6. `tb_family`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 分类的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 分类的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 分类的拉丁名称 |

7. `tb_genus`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个分类的唯一标识 |
| `name_zh` | `varchar(10)` | `unique` | 分类的中文名称 |
| `name_en` | `varchar(100)` | `unique` | 分类的英文名称 |
| `name_la` | `varchar(100)` | `unique` | 分类的拉丁名称 |

8. `tb_ibpage`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每个图鉴界面的唯一标识 |
| `plant_id` | `smallint` | `unique` | 与图鉴页面对应的植物`id` |
| `url` | `varchar(255)` | `unique` | 图鉴页面文件的路径 |
| `update_time` | `timestamp` | `not null` | 图鉴页面文件上传的时间 |
| `modify_time` | `timestamp` | `not null` | 图鉴页面文件的修改时间 |

9. `tb_route`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每条游览路线的唯一标识 |
| `url` | `varchar(255)` | `unique` | 游览路线文件的路径 |
| `update_time` | `timestamp` | `not null` | 游览路线文件的上传时间 |
| `modify_time` | `timestamp` | `not null` | 游览路线文件的修改时间 |

10. `tb_routedoc`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `smallint` | `primary key` | 每条游览路线详情的唯一标识 |
| `route_id` | `smallint` | `unique` | 与详情对应的路线`id` |
| `url` | `varchar(255)` | `unique` | 游览路线详情文件的路径 |
| `update_time` | `timestamp` | `not null` | 游览路线详情文件的上传时间 |
| `modify_time` | `timestamp` | `not null` | 游览路线详情文件的修改时间 |

11. `tb_distribution`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `mediumint` | `primary key` | 每个分布点的唯一标识 |
| `plant_id` | `smallint` | `unique` | 与分布点的对应的植物`id` |
| `longitude` | `float` | `not null` | 分布点的经度 |
| `latitude` | `float` | `not null` | 分布点的纬度 | 
| `update_time` | `timestamp` | `not null` | 分布点的上传时间 |
| `modify_time` | `timestamp` | `not null` | 分布点的修改时间 |

12. `tb_picture`

| 字段名称 | 类型 | 约束 | 说明 |
|:--------|:-----|:-----|:----|
| `id` | `mediumint` | `primary key` | 每张图片的唯一标识 |
| `plant_id` | `smallint` | `unique` | 与图片对应的植物`id` |
| `url` | `varchar(255)` | `unique` | 图片的路径 |
| `descrption` | `varchar(255)` | | 图片的描述 |
| `ipA` | `tinyint` | | 上传图片的`ip`地址的A段 |
| `ipB` | `tinyint` | | 上传图片的`ip`地址的B段 |
| `ipC` | `tinyint` | | 上传图片的`ip`地址的C段 |
| `ipD` | `tinyint` | | 上传图片的`ip`地址的D段 |
| `update_time` | `timestamp` | `not null` | 图片的上传时间 |