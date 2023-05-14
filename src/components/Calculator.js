import Screen from './Screen'
import Numbers from './Numbers'
import '../calculator.css'
function Calculator(){
    return(
        <div>
            <Screen value = '0'/>
            <div class="row">
            <Numbers number = '1' />
            <Numbers number = '2' />
            <Numbers number = '3' />
            </div>
            <div class="row">
            <Numbers number = '4' />
            <Numbers number = '5' />
            <Numbers number = '6' />
            </div>
            <div class="row">
            <Numbers number = '7' />
            <Numbers number = '8' />
            <Numbers number = '9' />
            </div>
        </div>
    );
}

export default Calculator;