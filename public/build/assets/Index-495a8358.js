import{_ as N,r as h,j as e,a as t,F as p,b as k,g as y,n as w}from"./app-d5bc4cb7.js";import{A as C}from"./AuthenticatedLayout-e7227511.js";import"./transition-18603408.js";function _({isCheckIn:l,setIsCheckIn:s}){const{data:c,setData:m,post:r,put:a,processing:u,errors:x}=N({ticket_number:""}),[n,d]=h.useState(null),[b,i]=h.useState(null),g=o=>{o.preventDefault(),k.post("/ticket/check",c).then(f=>{f.data.order?d(f.data.order):i(f.data.message)})},v=o=>{o.preventDefault(),a("/admin/order/"+n.id)};return e("div",{className:"w-full py-10 mx-auto bg-white rounded-lg shadow-md sm:w-96",children:n?t(p,{children:[t("div",{className:"text-left",children:[t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nomor Tiket"}),e("p",{children:n.ticket_number})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nama"}),e("p",{children:n.customer.name})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nomor Handphone"}),e("p",{children:n.customer.phone})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Email"}),e("p",{children:n.customer.email})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Jenis Kelamin"}),e("p",{children:n.customer.gender=="male"?"Pria":"Wanita"})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Tanggal Lahir"}),e("p",{children:new Date(n.customer.birth_date).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})})]})]}),t("div",{className:"flex flex-row items-center justify-center gap-4 pt-8",children:[e("button",{onClick:()=>{d(null)},className:"normal-case btn btn-outline btn-sm",children:"Batal"}),e("button",{onClick:v,className:"normal-case btn btn-primary btn-sm",children:"Check In"})]})]}):t(p,{children:[b&&t("p",{className:"text-sm text-center text-red-600",children:["* ",b]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"ticket_number",className:"pt-2 pb-1 font-semibold",children:"Masukkan Nomor Tiket"}),e("input",{type:"text",value:c.ticket_number,className:"border-gray-400 rounded-lg outline-none",onChange:o=>m("ticket_number",o.target.value)}),x.ticket_number&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",x.ticket_number]})]}),t("div",{className:"flex flex-row items-center justify-center gap-4 pt-8",children:[e("button",{onClick:()=>s(!1),className:"normal-case btn btn-outline btn-sm",children:"Batal"}),e("button",{onClick:g,className:"normal-case btn btn-primary btn-sm",children:"Cek Tiket"})]})]})})}function j({order:l,setOrder:s}){const[c,m]=h.useState(!1),{data:r,setData:a,put:u,processing:x,errors:n}=N({ticket_number:l.ticket_number,name:l.customer.name,email:l.customer.email,phone:l.customer.phone,gender:l.customer.gender,born_place:l.customer.born_place,born_date:l.customer.born_date}),d=i=>{i.preventDefault(),u("/order/"+l.id)},b=i=>{i.preventDefault(),y.delete("/admin/order/"+l.id)};return e("div",{className:"w-full py-10 mx-auto bg-white rounded-lg shadow-md sm:w-96",children:c?t("form",{onSubmit:d,children:[t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"ticket_number",className:"pt-2 pb-1 font-semibold",children:"Nomor Tiket"}),e("input",{type:"text",value:r.ticket_number,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("ticket_number",i.target.value)}),n.ticket_number&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.ticket_number]})]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"name",className:"pt-2 pb-1 font-semibold",children:"Nama"}),e("input",{type:"text",value:r.name,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("name",i.target.value)}),n.name&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.name]})]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"phone",className:"pt-2 pb-1 font-semibold",children:"Nomor Handphone"}),e("input",{type:"text",value:r.phone,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("phone",i.target.value)}),n.phone&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.phone]})]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"email",className:"pt-2 pb-1 font-semibold",children:"Email"}),e("input",{type:"email",value:r.email,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("email",i.target.value)}),n.email&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.email]})]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"gender",className:"pt-2 pb-1 font-semibold",children:"Jenis Kelamin"}),t("select",{value:r.gender,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("gender",i.target.value),children:[e("option",{value:"",disabled:!0,children:"Pilih Salah Satu"}),e("option",{value:"male",children:"Pria"}),e("option",{value:"female",children:"Wanita"})]}),n.gender&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.gender]})]}),t("div",{className:"flex flex-col px-4",children:[e("label",{htmlFor:"birth_date",className:"pt-2 pb-1 font-semibold",children:"Tanggal Lahir"}),e("input",{type:"date",value:r.birth_date,className:"border-gray-400 rounded-lg outline-none",onChange:i=>a("birth_date",i.target.value)}),n.birth_date&&t("div",{className:"pt-1 pb-2 text-sm text-red-600",children:["* ",n.birth_date]})]}),t("div",{className:"flex flex-row items-center justify-center gap-4 pt-8",children:[e("button",{onClick:()=>{s(null)},className:"normal-case btn btn-outline btn-sm",children:"Batal"}),e("button",{onClick:d,className:"normal-case btn btn-primary btn-sm",children:"Submit"})]})]}):t(p,{children:[t("div",{className:"text-left",children:[t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nomor Tiket"}),e("p",{children:l.ticket_number})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nama"}),e("p",{children:l.customer.name})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Nomor Handphone"}),e("p",{children:l.customer.phone})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Email"}),e("p",{children:l.customer.email})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Jenis Kelamin"}),e("p",{children:l.customer.gender=="male"?"Pria":"Wanita"})]}),t("div",{className:"flex flex-row items-center justify-between px-4",children:[e("label",{className:"pt-2 font-semibold",children:"Tanggal Lahir"}),e("p",{children:new Date(l.customer.birth_date).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})})]})]}),t("div",{className:"flex flex-row items-center justify-center gap-4 pt-8",children:[e("button",{onClick:()=>{s(null)},className:"normal-case btn btn-outline btn-sm",children:"Kembali"}),e("button",{onClick:b,className:"normal-case btn btn-error btn-sm",children:"Hapus"}),e("button",{onClick:()=>m(!0),className:"normal-case btn btn-primary btn-sm",children:"Edit"})]})]})})}function T(l){const[s,c]=h.useState(!1),[m,r]=h.useState();return t(C,{auth:l.auth,errors:l.errors,isCheckIn:s,setIsCheckIn:c,header:e("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:l.title}),children:[e(w,{title:l.title}),e("div",{className:"py-12",children:e("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e("div",{className:"overflow-x-auto",children:s?e(_,{isCheckIn:s,setIsCheckIn:c}):m?e(p,{children:e(j,{order:m,setOrder:r})}):t("table",{className:"table w-full table-compact",children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Nomor Tiket"}),e("th",{children:"Nama"}),e("th",{children:"Nomor Handphone"}),e("th",{children:"Email"}),e("th",{children:"Jenis Kelamin"}),e("th",{children:"Tanggal Lahir"}),e("th",{children:"Status"}),e("th",{children:"Aksi"})]})}),e("tbody",{children:l.orders.map((a,u)=>t("tr",{children:[e("td",{children:u+1}),e("td",{children:a.ticket_number}),e("td",{children:a.customer.name}),e("td",{children:a.customer.phone}),e("td",{children:a.customer.email}),e("td",{children:a.customer.gender=="male"?"Pria":"Wanita"}),e("td",{children:new Date(a.customer.birth_date).toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})}),t("td",{children:[a.status=="Sudah Check-In"&&e("div",{className:"badge badge-primary",children:"Sudah Check-In"}),a.status=="Belum Check-In"&&e("div",{className:"badge badge-primary badge-outline",children:"Belum Check-In"})]}),t("td",{className:"flex gap-2",children:[e("button",{onClick:()=>r(a),className:"normal-case btn btn-xs btn-warning",children:"Edit"}),e("button",{onClick:()=>r(a),className:"normal-case btn btn-xs btn-error",children:"Delete"})]})]}))}),e("tfoot",{children:t("tr",{children:[e("th",{}),e("th",{children:"Nomor Tiket"}),e("th",{children:"Nama"}),e("th",{children:"Nomor Handphone"}),e("th",{children:"Email"}),e("th",{children:"Jenis Kelamin"}),e("th",{children:"Tanggal Lahir"}),e("th",{children:"Status"}),e("th",{children:"Aksi"})]})})]})})})})]})}export{T as default};