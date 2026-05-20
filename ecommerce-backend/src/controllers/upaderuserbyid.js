
const updateUser = (request, response) => {

    try {
        const { id } = request.params
        const { name, email, password } = request.body
        if (!id) {
            response.status(401).json({
                "message": "for the updation we need used id"
            })
        }
        else if (!name && !email && !password) {
            response.status(401).json({
                "message": "for the updation we need used all the fields"
            })
        }


    } catch (error) {

    }
}