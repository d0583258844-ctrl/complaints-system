import jwt from 'jsonwebtoken';

export const requireAdminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "acsses denied"});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'The token has expired' });
    }
};