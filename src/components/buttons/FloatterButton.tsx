
interface Props {
    formMode: boolean;
    setFormMode: Function;
    setTask: Function;
}
const FloatterButton = ({formMode, setFormMode, setTask}: Props) => {
    
    return (
    <div
        className={`floater-button ${!formMode ? 'faa-bounce animated bg-success' : 'bg-danger'}`}
        onClick={() => {
            setTask({
                id: '',
                name: '',
                date: '',
                status: false
              });
            setFormMode(!formMode)}
        }>
        <i className={`ion-ios-${!formMode ? 'add' : 'close'}`} />
    </div>
)}

export default FloatterButton;