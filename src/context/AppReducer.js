export default (state, action) => {
    swtch(action.type)
    {
        default:
            return state;
    }
}