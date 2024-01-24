$(document).ready(
    function () {
        $("#frmRegForm").validate(
            {
                rules: {
                    firsname: {
                        required: true,
                        minlenght: 2
                    },
                    lastname: {
                        required: true,
                        minlenght: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    repassword: {
                        required: true,
                        equalTo: '#password'
                    }
                },
                message: {
                    firstname: {
                        required: "Please enter a valid first name",
                        minlenght: "At least 2 characters long"
                    },
                    lastname: {
                        required: "Please enter a valid last name",
                        minlenght: "At least 2 characters long"
                    },
                    email: {
                        required: "Please enter a valid email",
                        email: "Please enter valid email"
                    },
                    password: {
                        required: "Please enter a valid password",
                    },
                    repassword: {
                        required: "Please enter a valid comfirm password",
                        equalTo: "Password not wrong"
                    }
                }
            }
        )
    }
)