export const orderColumns=[
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"Status",
        accessor:"status",
        Cell:({value})=>value==="paid"?<span className="green">Paid</span>:<span className="red">Not Paid</span>
    },
    {
        Header:"Date",
        accessor:"date"
    },
    {
        Header:"Total",
        accessor:"total"
    },
]