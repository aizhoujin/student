module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: `
          @import "@/style/color.scss";
        `
            }
        }
    }
}
