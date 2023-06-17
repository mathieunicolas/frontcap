export const updateTitle = (row: any, newtitle: string) => {
    console.log(row['title'])
    row['title'] = newtitle
    console.log(row['title'])
}