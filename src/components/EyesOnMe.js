// Code EyesOnMe Component Here
function EyesOnMe(){
    function HandleFOcus(){
        console.log('Good!')
    }

    function HandleBlur(){
        console.log('Hey! Eyes on me!')
    }

    return(
        <div>

            <button onBlur={HandleBlur}      onFocus ={HandleFOcus}  >Eyes on me</button>
            </div>
    )
}
export default EyesOnMe