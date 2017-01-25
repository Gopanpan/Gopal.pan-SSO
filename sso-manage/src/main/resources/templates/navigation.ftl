<!--左侧导航开始-->
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="nav-close"><i class="fa fa-times-circle"></i>
    </div>
    <div class="sidebar-collapse">
        <ul class="nav" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear">
                                  <span class="block m-t-xs" style="font-size:20px;">
                                    <i class="fa fa-area-chart"></i>
                                    <strong class="font-bold">bing.Pan-SSO</strong>
                                </span>
                            </span>
                    </a>
                </div>
                <div class="logo-element">SSO</div>
            </li>
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span class="ng-scope"></span>
            </li>
            <li>
                <a href="/manage/ssoMain">
                    <i class="fa fa-home"></i>
                    <span class="nav-label">主页</span>
                </a>
            </li>
            <li class="line dk"></li>
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span class="ng-scope">后台系统管理</span>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa fa-bar-chart-o"></i>
                    <span class="nav-label">系统设置</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysInfoList">系统列表</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa fa-bar-chart-o"></i>
                    <span class="nav-label">资源设置</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysResource">资源列表</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa fa-bar-chart-o"></i>
                    <span class="nav-label">角色设置</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysRoleList">角色列表</a>
                    </li>
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysRole">角色权限分配</a>
                    </li>
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysUserRole">角色用户分配</a>
                    </li>
                </ul>
            </li>
            <li class="line dk"></li>

            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span class="ng-scope">用户管理</span>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa fa-bar-chart-o"></i>
                    <span class="nav-label">系统用户管理</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                    <li>
                        <a class="J_menuItem" href="${ctx}/manager/sysUserList">用户列表</a>
                    </li>
                </ul>
            </li>
            <#--<li>-->
                <#--<a href="#">-->
                    <#--<i class="fa fa fa-bar-chart-o"></i>-->
                    <#--<span class="nav-label">普通用户管理</span>-->
                    <#--<span class="fa arrow"></span>-->
                <#--</a>-->
                <#--<ul class="nav nav-second-level">-->
                    <#--<li>-->
                        <#--<a href="">用户列表</a>-->
                    <#--</li>-->
                <#--</ul>-->
            <#--</li>-->

        </ul>
    </div>
</nav>
<!--左侧导航结束-->
