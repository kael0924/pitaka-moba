import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import ScreenHeader from "../../Components/ScreenHeader"
import WhiteCard from "../../Components/WhiteCard"

function AddExpense() {
    return(
        <GradientBackground>
            <SafeAreaView>
                <ScreenHeader title="Add Expense" variant="close"></ScreenHeader>
                <WhiteCard></WhiteCard>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default AddExpense;