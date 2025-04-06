const zod = require("zod")

const NewArticleValidation = zod.object({
    title:zod.string(),
    description:zod.string(),
    details:zod.string()
})

module.exports = {
    NewArticleValidation
}