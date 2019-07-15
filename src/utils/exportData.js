export  const exportTableData=function(data,column,file_name="file_export"){
  const tHeader = column;
  const rows = [tHeader]
  data.forEach(item=>{
    const itemArr= []
    itemArr.push(Object.values(item))
    // itemArr.push(item.address)
    // itemArr.push(item.date)
    // itemArr.push(item.name)
    rows.push(itemArr)
  })

let csvContent = "data:text/csv;charset=utf-8,\uFEFF";

  rows.forEach(item=>{
    const row = item.join(",")
      csvContent += row + '\r\n'
  })

  const encodeUri = encodeURI(csvContent)

  const link = document.createElement("a")

  link.setAttribute("href",encodeUri)
  link.setAttribute("download",`${file_name}.csv`)
  document.body.appendChild(link)

  link.click()
  document.body.removeChild(link)
}