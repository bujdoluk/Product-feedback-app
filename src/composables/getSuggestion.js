import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSuggestion = (id) => {
    const suggestion = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('suggestions').doc(id).get()

            if (!res.exists) {
                throw Error('That suggestion does not exist.')
            }

            suggestion.value = { ...res.data(), id: res.id }
        } catch (err) {
            error.value = err.message
        }
    }

    return { suggestion, error, load }

}

export default getSuggestion