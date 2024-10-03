import User from '../model/user.model.js';
import bcrypt from 'bcrypt'
export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        const user =await User.findOne({ email })
        if (user)
            return res.status(400).json({ message: 'User already exists' })
        
        //hash password
        const hashPassword =await bcrypt.hash(password,10)
        const newUser = new User({
            fullName: fullName,
            email: email,
            password:hashPassword,
        })
        await newUser.save() 
        res.status(200).json({
            message: 'User created', user: {
            _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
        } })
    } catch (err) { 
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}

//login user
export const login = async (req, res) => { 
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        
        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: 'Invalid user or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        // Check if password matches
        if (!isMatch) { 
            return res.status(400).json({ message: 'Invalid user or password' });
        } 

        // Successful login
        res.status(200).json({
            message: 'Login successful', 
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        }); 
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');  
    }
};

