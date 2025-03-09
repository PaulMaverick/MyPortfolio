import styles from '../../styles/projects/currency.module.css'
import currencyImg from '../../imgs/CurrencyApp.png'

function CurrencyAppPage() {
  return (
    <section className={styles.currencyContainer}>
    <header className={styles.currencyHeader}>
        <h1>Currency Exchange App</h1>
    </header>
    <div className={styles.imgContainer}>
      <img src={currencyImg} alt="Blog Img" />
    </div>
    <div className={styles.content}>
        <p>A simple currency App, that enable users to get the total equivalent exchange from one currency to another. It's currency data are upto date with as they are maintained by an open source <a href='https://moneymorph.dev/'>forex and currency conversion APi</a></p>

        <div>
          <p>Link to the <a href="https://currencyapp-9w1.pages.dev/">Live Site</a>.</p>
          <p>Link to <a href="https://github.com/PaulMaverick/currencyApp">Github</a>.</p>
        </div>
        <div>
          <p>techs that were used:</p>
          <ul className={styles.techList}>
            <li>React.Js</li>
            <li>Cloudflare workers</li>
            <li>Hono</li>
          </ul>
        </div>
        <p>React.js is used for the front end, while Hono and Cloudflare Workers serve as a serverless proxy that calls the conversion API.</p>
        
    </div>
</section>
  )
}

export default CurrencyAppPage