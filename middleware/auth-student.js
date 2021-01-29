export default async function({$auth, redirect}) {

    let user = $auth.state.user;

    if(user && user.is_teacher == 0){



    }else{
        redirect('/');

    }


}