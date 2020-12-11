$('.pagination').pagination({
    pageCount: 3,
    current: 1,
    prevCls: 'prevBox',
    nextContent: '下一页',
    coping: true,
    jump: true,
    jumpIptCls: 'inp',
    jumpBtnCls: 'btn',
    callback(index){
        console.log(index.getCurrent())
    }
    
})

// const list_info = {
//     sort_method: '综合',
//     sort_type: 'ASC',
//     current: 1,
//     pagesize: 8
// }
// 渲染
const lis = document.querySelectorAll('.goodsList li')
const uls = document.querySelector('.goodsList ul')

// console.log(lis)
// console.log(uls)
let status = 0

getData()
function getData() {
    ajax({
        url: '/hr',
        data: `id_goods=60979%2C59476%2C59426%2C59427%2C59428%2C60076%2C59268%2C59236%2C59566%2C56829%2C56855%2C59276%2C59212%2C58491%2C56835%2C56836%2C57200%2C56856%2C55686%2C53198`,
        success(res){
            status += 8
            res = JSON.parse(res)
            // console.log(res)
            bindHtml(res.data)
        }
    })
}

function bindHtml(arr) {
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        const str = `
            <li class="thumbnail">

                <img src="${arr[i].info.image}" alt="" style="width:100%">
                <div class="caption ">
                    <h3 data-id="${arr[i].info.id_goods}">${arr[i].info.pro_name}</h3>
                    <p class="price">￥ 
                    <span class="text-danger">${arr[i].info.price}
                    </span>
                    <span> ID: ${ arr[i].info.id_goods } </span>
                    </p>
                    <p>
                        <a href="javascript:;" class="gouwuche btn btn-danger addCart" role="button" data-id="${arr[i].info.id_goods}">加入购物车</a>
                        <a href="./cart.html" class="jiesuan" role="button">去结算</a>
                    </p> 
                </div>
            </li>   
        
        `
        uls.innerHTML += str

        // getData()
    }
   
}

// 价格排序
// $('.fr').on('click', 'span', function () {
//     const method = $(this).attr('data-method')
//     const type = $(this).attr('data-type')
//     console.log(method)
//     console.log(type)

//     $(this).addClass('active').siblings().removeClass('active')
//     list_info.sort_method = method
//     list_info.sort_type = type
//     getData()
    
//     $(this)
//         .attr('data-type', type ==='ASC' ? 'DESC' : 'ASC')
//         .siblings()
//         .attr('data-type', 'ASC')
// })

$('.goodsList ul').on('click', 'h3', function () {
    const id = $(this).data('id')
    console.log(id)
    setCookie('id_goods', id)
    window.location.href = './detail.html'
})

// 加入购物车
$('.goodsList').on('click', '.btn-addCart', function () {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    console.log(cart)
    // const id = $(this).data('id')
    // console.log(id)
})