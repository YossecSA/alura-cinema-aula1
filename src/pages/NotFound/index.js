import styles from './NotFound.module.css'
import Cabecera from 'components/Cabecera/Cabecera'
import Pie from 'components/Pie'
function NotFound(){
    return(
        <>
            <section>
                <h2 className={styles.error}>404</h2>
                <p className={styles.text_error}>Pagina no existe</p>
            </section>
        </>
    )
}
export default NotFound