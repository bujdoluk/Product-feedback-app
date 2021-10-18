import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSuggestions = () => {
    const suggestions = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('suggestions').orderBy('createdAt', 'desc').get();

            suggestions.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            error.value = err.message
        }
    }

    return { suggestions, error, load }
}

export default getSuggestions