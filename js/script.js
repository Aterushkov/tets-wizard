let webstore = new Vue({
        el: '#app',
        data: {
            showPageOne: true,
            showPageTwo:false,
            showPageThree:false,
            showPageFour:false,
            showPageFive:false,
            showPageSix:false,
            showPageSeven:false,
            lastPage:false,
            order:{
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company:'',
                radios:'',
            },
            selectThreePage:[],
            selectOnePage:[],

        },
        methods: {
            checkPage(value) {
                if(value.length){
                    return checkFirstPage = true;
                }
            },
            checkPageName(valueFname, valueLname) {
                let inputFname = this.$refs.firstName;
                let inputLname = this.$refs.lastName;
                let error = this.$refs.error;
                if(inputFname ||inputLname){
                    valid(inputFname);
                    valid(inputLname);
                }
                 function valid(input){
                    input.addEventListener("blur", () => {
                        if (!(valueFname.length && valueLname.length)) {
                            error.classList.add('invalid');
                            error.innerHTML = 'Пожалуйста, введите Ваше имя и фамилию';
                        }else if ((valueFname.length && valueLname.length)){
                            error.classList.add('done');
                            error.innerHTML = "Все верно";
                        }
                    });
                    input.addEventListener("focus", () => {
                        error.classList.remove('invalid');
                        error.innerHTML = " ";
                    });
                }
                if(valueFname.length && valueLname.length){
                    return checkFirstPage = true;
                }
            },
            validEmail(email) {
                let em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let input = this.$refs.email;
                let error = this.$refs.error;
                if(input){
                    input.addEventListener("blur", () => {
                        if (!em.test(email)) {
                            error.classList.add('invalid');
                            error.innerHTML = 'Пожалуйста, введите правильный email.';
                        }else if (em.test(email)){
                            error.classList.add('done');
                            error.innerHTML = "Все верно";
                        }
                    });
                    input.addEventListener("focus", () => {
                            error.classList.remove('invalid');
                            error.innerHTML = " ";
                    });
                }
                if(em.test(email)){
                    return checkFirstPage = true;
                }

            },
            validPhone(phone) {
                let ph = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

                let input = this.$refs.phone;
                let error = this.$refs.error;
                if(input){
                    input.addEventListener("blur", () => {
                        if (!ph.test(phone)) {
                            error.classList.add('invalid');
                            error.innerHTML = 'Пожалуйста, введите правильный номер телефона.';
                        }else if (ph.test(phone)){
                            error.classList.add('done');
                            error.innerHTML = "Все верно";
                        }
                    });
                    input.addEventListener("focus", () => {
                        error.classList.remove('invalid');
                        error.innerHTML = " ";
                    });
                }
                if(ph.test(phone)){
                    return checkFirstPage = true;
                }
            },
        },
    });

