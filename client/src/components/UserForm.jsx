import { useRef, useState, useEffect } from "react";
import { createUser } from "../services/apiService";

const UserForm = () => {

    // creating all the references for the input fields inside the form (DOM elements).
    // The useRef hook is used to create a reference to the input fields, unlike the useState hook which is used to create a state variable.

    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const cityRef = useRef();
    const favTennisPlayerRef = useRef();

    // State for notify the user on success / failure user creation
    const [message, setMessage] = useState("");

    
    // After the user submits the form, the handleSubmit function is called and create the user object (can use TypeScript Interface?)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            age: ageRef.current.value,
            city: cityRef.current.value,
            favoriteTennisPlayer: favTennisPlayerRef.current.value
        };

        // Send user to the backend and set message state based on the response
        try {
            const response = await createUser(user);
            if (response?.status === 201) {
                setMessage("User successfully created!");
            } else {
                setMessage("User creation failed.");
            }
        } catch (error) {
            setMessage("Error submitting form. Try again.");
        }
    };


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);  // Cleanup timer on unmount
        }
    }, [message]);

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder="Full Name" required />
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="number" ref={ageRef} placeholder="Age" required />
                <input type="text" ref={cityRef} placeholder="City" required />
                <input type="text" ref={favTennisPlayerRef} placeholder="Favorite Tennis Player" required />
                <button type="submit">Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UserForm;