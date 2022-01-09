import { AiOutlineClose } from "react-icons/ai";

const CreateGroupModel = ({ show, handleClose, groupName, setGroupName, handleCreate}) => {
    const showHideClassName = show ?  "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section  className="modal-main">
                <AiOutlineClose className="close-btn" onClick={handleClose}/>
                <form onSubmit={handleCreate}> 
                    Group Name: <input value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
                    <button type="submit" onClick={handleClose}>Submit</button>
                </form>
            </section>
        </div>
    )
}


export default CreateGroupModel;