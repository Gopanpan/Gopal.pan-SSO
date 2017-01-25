$(document).ready(function () {
    $.jgrid.defaults.styleUI = 'Bootstrap';
    $.ajax({
        type: "POST",// 请求方式
        url: webConfig.webUrl + "/getSysInfoList",
        data: {},
        dataType: "json",// 数据返回类型
        success: function (data) {
            if (data.code == "10000" && data.result != null) {
                var result = data.result;
                $.each(result, function (index, value) {
                    $("#sysInfoId").append(
                        "<option value='" + value.id + "'>" + value.name + "</option>");
                });
                initJqgrid();
            } else {
                layer.alert(data.message, {icon: 2});
            }
        }
    })
});

$("#findRole").bind('click', function () {
    query();
});

//查询
function query() {
    var reloadParams = {
        url: dataUrl,
        postData: setPostData()
    };
    $(grid_selector).jqGrid("setGridParam", reloadParams).trigger("reloadGrid", [{page: 1}]);
}

var dataUrl = webConfig.webUrl + '/getSysRolePageList',
    grid_selector = "#grid-table",
    pager_selector = "#grid-pager",
    pageSize = 20;

function initJqgrid() {
    $(grid_selector).jqGrid({

        height: 'atuo',
        //是否允许全选
        // multiselect: true,

        //全选的宽度(只有multiselect:true时)
        //multiselectWidth: 30,

        //是否允许显示/隐藏，只有caption不为空时有效
        hidegrid: false,

        //是否显示行号
        // rownumbers: true,

        //table → caption
        caption: "角色列表",

        //显示的标题
        colNames: ['角色编号', '角色名称', '操作'],

        //列属性，和colNames的个数和顺序必须对应
        //参考：http://www.helloweba.com/view-blog-162.html#col
        colModel: [
            {
                name: 'id',
                index: 'id',
                sortable: false,
                align: 'center',
                width: 50
            },
            {
                name: 'roleName',
                index: 'roleName',
                sortable: false,
                align: 'center',
                width: 100
            },
            {
                name: 'id',
                index: 'id',
                sortable: false,
                resizable: false,
                align: 'center',
                width: 125,
                formatter: function (x, y, z) {
                    return '<a class="btn btn-primary false btn-xs" onclick="limitRole(\''
                        + x
                        + '\');">资源配置</a>  <a class="btn btn-primary false btn-xs" onclick="limitColumns(\''
                        + x + '\');">列配置</a>';
                    /*<a class="btn btn-primary btn-xs" onclick="showInfo(\''+x+'\',\''+z['roleName']+'\');">修改</a>*/
                }
            }
        ],

        //可选显示的行数
        rowList: [10, 20, 30],

        //默认显示行数
        rowNum: pageSize,

        //总条数
        viewrecords: true,

        //分页层 id
        pager: pager_selector,

        //分页参数
        prmNames: {
            page: 'pageIndex',
            rows: "pageSize",
            order: null,
            search: null,
            sort: null,
            nd: null,
            sidx: null
        },

        //提交方式，默认get
        mtype: 'post',

        postData: setPostData(),

        //数据格式
        datatype: "json",

        jsonReader: {
            //是否允许乱序显示数据,true:不可以
            repeatitems: true,
            root: "result.data",
            total: "result.page",
            page: "result.pageIndex",
            records: "result.recordsTotal"
        },

        //数据来源地址
        url: dataUrl
    }).jqGrid('setGridWidth', $(".ibox-content").width());

    // //设置grid宽度为自适应,适应比例根据每列设置的宽度
    // $(window).on('resize.jqGrid', function () {
    //     $(grid_selector).jqGrid('setGridWidth', $(".ibox-content").width());
    // });
}

//设置参数
function setPostData() {
    return {
        sysInfoId: $("#sysInfoId").val(),
        pageSize: pageSize
    };
}

//权限分配
function limitRole(id) {
    parent.layer.open({
        type: 2,
        title: '配置权限',
        shadeClose: true,
        shade: [0.5],
        maxmin: true, //开启最大化最小化按钮
        area: ['768px', '650px'],
        //权限配置页面
        content: webConfig.webUrl + "/manager/sysRoleResource?id=" + id
    });
}

//分配列权限
function limitColumns(id) {
    parent.layer.open({
        type: 2,
        title: '配置权限',
        shadeClose: true,
        shade: [0.5],
        maxmin: true, //开启最大化最小化按钮
        area: ['768px', '650px'],
        //权限配置页面
        content: webConfig.webUrl + "/manager/sysRoleColumns?id=" + id
    });
}

