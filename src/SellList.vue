<template>
    <div>
        <el-button @click="querySellList">查询</el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="closeTable"></el-button>
        <template v-if="showTable">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="info"
                        label="外观名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="价格"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="remainingTime"
                        label="开售时间"
                        width="180"
                >
                </el-table-column>
                <el-table-column
                        prop="server_name"
                        label="区服">
                </el-table-column>
                <el-table-column
                        prop="role_name"
                        label="账号">
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    import client from "./request/axios-request";
    export default {
        name: "SellList",
        data() {
            return {
                callback:'__xfe1',
                req_id:'',
                tableData: [],
                showTable:false
            }
        },
        methods:{
            querySellList(){
                this.showTable = true;
                const url =
                    `https://trade-api.seasunwbl.com/api/seller/goods/consignment_list?req_id=11111&game_id=jx3&goods_type=3&__ts__=1723787047529&callback=${this.callback}`;

                console.log('11111');
                client.request(url)
                    .then((res)=>{
                        console.log("succcc");
                        // console.log(typeof (res.data));
                        const sellListStr = res.data.substring(this.callback.length+1,res.data.length - 2);
                        // console.log( sellListStr);
                        const sellList = JSON.parse(sellListStr);
                        console.log(sellList.data.list);
                        this.tableData = this.formatDataList(sellList.data.list);

                    })
                    .catch((err)=>{
                        console.log("errr");
                        console.log(err)
                    })
            },
            formatDataList(rawData){
                const newList = [];
                for (let i = 0; i < rawData.length; i++){
                    let  tempObj = {};
                    const {info, single_unit_price, remaining_time,server_name,role_name} = rawData[i];
                    const sellTime =parseInt(Date.now() + remaining_time*1000) ;
                    const remainingTime =  new Date(sellTime).toLocaleString().replace(/:\d{1,2}$/,'');
                    const price = single_unit_price/100;
                    tempObj =  {info, price, server_name,remainingTime, role_name};
                    newList.push(tempObj);
                }
                console.log(newList);
                return newList;
            },
            closeTable(){
                this.showTable = false;
            }
        }
    }
</script>

<style scoped>

</style>