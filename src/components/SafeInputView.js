import { Keyboard, KeyboardAvoidingView, Platform, Pressable} from "react-native";
import PropTypes from 'prop-types';

//IOS에서 키보드가 가리는 문제 
const SafeInputView = ({ children }) => {
    return (
       <KeyboardAvoidingView style={{flex:1}}
       behavior={Platform.select({ios: 'padding'})}>
        <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
            {children}
        </Pressable>
       </KeyboardAvoidingView>
    );
};

SafeInputView.propTypes = {
    children: PropTypes.node,
};

export default SafeInputView;