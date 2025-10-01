import router from "../router"

import { firebaseapp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useAuth as firebaseAuth } from '@vueuse/firebase/usAuth'

const auth = getAuth(firebaseapp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password)
        return isAuthenticated.Value
    }

    const logout = async () => {
        await signOut(auth)
        router.push({ name: 'Home' })
    }
    
    return { isAuthenticated, user, login, logout }

}