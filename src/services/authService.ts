import jwt from "jsonwebtoken"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!

class AuthService {
  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const token = this.generateToken(userCredential.user.uid)
    return { user: userCredential.user, token }
  }

  async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const token = this.generateToken(userCredential.user.uid)
    return { user: userCredential.user, token }
  }

  async logout() {
    await signOut(auth)
  }

  private generateToken(userId: string) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1d" })
  }

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      return decoded
    } catch (error) {
      throw new Error("Invalid token")
    }
  }
}

export default new AuthService()

