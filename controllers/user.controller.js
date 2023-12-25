

const getUserById = async(req,res)=>{
    const id = req.params.id;
    res.json({
        msg:`User by id ${id}`
    })

}
const saveUser = async(req,res)=>{
    res.json({
        msg:`Save user`
    }) 
}
export {
    getUserById,
    saveUser
}