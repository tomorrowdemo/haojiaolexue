<title>个人信息</title>
<?php include('/../header.php');?>    

<div class="clear"></div>
    <div style="margin:20px 0;"></div>
    <div class="easyui-layout" style="width:700px;height:350px;">
      <div data-options="region:'north'" style="height:50px"></div>
      <div data-options="region:'south',split:true" style="height:50px;"></div>
      <div data-options="region:'east',split:true,hideCollapsedContent:false" title="East" style="width:100px;"></div>
      <div data-options="region:'west',split:true,hideCollapsedContent:false,collapsed:true" title="West" style="width:100px;"></div>
      <div data-options="region:'center',title:'Main Title'">
        <table class="easyui-datagrid"
            data-options="url:'datagrid_data1.json',method:'get',border:false,singleSelect:true,fit:true,fitColumns:true">
          <thead>
            <tr>
              <th data-options="field:'itemid'" width="80">Item ID</th>
              <th data-options="field:'productid'" width="100">Product ID</th>
              <th data-options="field:'listprice',align:'right'" width="80">List Price</th>
              <th data-options="field:'unitcost',align:'right'" width="80">Unit Cost</th>
              <th data-options="field:'attr1'" width="150">Attribute</th>
              <th data-options="field:'status',align:'center'" width="60">Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>


<div class="mainfoot"></div>
<?php include('/../footer.php');?>