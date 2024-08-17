sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})