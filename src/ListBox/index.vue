<template>
    <div class="list-box">
        <div class="content clear">
            <div class="tool" v-for="i in list">
                <img :src="i.url">
                <div>{{i.name}}</div>
            </div>
        </div>
        <ul class="footer clear" v-show="pageInfo.pages > 1">
            <li :class="{active: pageInfo.page === i}" v-for="i in pageInfo.pages" :name="i"><button></button></li>
        </ul>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default {
        name: 'ListBox',
        data () {
            return {
                _status: false, // 局部刷新用
                contentNode: null,
                footerNode: null,
                childNode: null,
                pageInfo: {
                    page: 1,
                    limit: 10,
                    total: 0,
                    pages: 0
                }
            }
        },
        props: {
            list: {
                type: Array
            }
        },
        methods: {
            _changePage(page) {
                this.pageInfo.page = page;
                $('.footer li').each(function () {
                    const obj = $(this);
                    obj.toggleClass('active', obj.attr('name') === page);
                });
                var start = (page - 1) * this.pageInfo.limit;
                var end = start + this.pageInfo.limit;
                $('.tool').each(function (i) {
                    $(this).toggleClass('hide', i < start || i >= end);
                });
            },
            _resize() {
                // $('.tool').removeClass('hide'); // 还原
                // this.pageInfo.page = 1;
                const pNode = this.contentNode;
                const cNode = this.childNode;
                const col = Math.floor(parseInt(pNode.width()) / parseInt(cNode.width()));
                const row = Math.floor(parseInt(pNode.height()) / parseInt(cNode.height()));
                this.pageInfo.limit = col * row || 1;
                this.pageInfo.pages = Math.ceil(this.pageInfo.total / this.pageInfo.limit);
                this._status = !this._status;
                // console.log('pageInfo', this.pageInfo, col, row);
            }
        },
        created () {
            const that = this;
            // console.log('create', this.list);
            $(function () {
                $('.list-box .content').on('click', '.tool', function () {
                    alert($(this).find('div').html());
                });
                $('.list-box .footer').on('click', 'li', function () {
                    console.log('click .footer');
                    that._changePage($(this).attr('name'));
                });
                $(window).resize(that._resize);

                that.contentNode = $('.list-box .content');
                that.footerNode = $('.list-box .footer');
                that.childNode = $('.list-box .tool').eq(0);
                that.pageInfo.total = that.list.length;
                that._resize();
                // console.log('create', that.pageInfo);
            });
        },
        mounted () {
            console.log('mounted', this.list);
        }
    }
</script>
<style lang="less" scoped>
    @import "../common/common.less";

    .list-box {
        padding: 2rem 0;
        min-width: 1rem;
        background-color: #101419;
    }
    .content {
        padding-bottom: 0;
        margin-bottom: 20px;
        max-height: 5rem;
        overflow: hidden;
    }
    .tool {
        float: left;
        width: 4rem;
        height: 5rem;
        cursor: pointer;
        img {
            padding: 1rem 1rem 0.5rem;
            width: 2rem;
            height: 2rem;
        }
        div {
            font-size: 1rem;
            text-align: center;
            color: #999;
        }
    }
    .footer {
        display: block;
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0;
        width: 100%;
        li {
            position: relative;
            display: inline-block;
            padding: 0;
            cursor: pointer;
        }
        button {
            border: 0;
            background: transparent;
            display: block;
            outline: none;
            line-height: 0;
            font-size: 0;
            color: transparent;
            padding: 0.5rem;
            cursor: pointer;
        }
        button:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "\2022";
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 2rem;
            font-family: arial, sans-serif;
            text-align: center;
            color: gray;
            -webkit-transition: all .3s;
            transition: all .3s;
            opacity: .25;
            -webkit-font-smoothing: antialiased;
        }
        li.active button:before {
            color: #d5d5d5;
            opacity: .75;
        }
        li + li {
            margin-left: 0.5rem;;
        }
    }

</style>
