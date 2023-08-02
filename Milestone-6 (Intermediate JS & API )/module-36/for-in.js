const laptop = {
    brand:'HP',
    model:'g3-890',
    price:55000,
    isNew: true
}
for (const key in laptop) {
    const value = laptop[key]
    console.log(value)
}