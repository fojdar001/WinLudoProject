import './css/Help.css'

const Help=()=>{
    return(
        <>
        <section className="help-section">
      <div className="container">
        <h2 className="help-title">Need Help? We're Here for You!</h2>
        <p className="help-subtitle">Find answers to common questions and get support anytime.</p>

        <div className="help-content">
          <div className="help-block">
            <h4>1. How to Register & Login?</h4>
            <p>
              To register, click on the <strong>Register</strong> button on the homepage. Fill in your details,
              verify your phone number with OTP, and you're ready to play! Already registered users can directly
              <strong> login</strong> using their mobile number and password.
            </p>
          </div>

          <div className="help-block">
            <h4>2. How to Play the Game?</h4>
            <p>
              Visit the <strong>How to Play</strong> section from the top menu. You’ll find complete rules,
              setup instructions, and strategies to win the game. It's beginner-friendly!
            </p>
          </div>

          <div className="help-block">
            <h4>3. How to Add and Withdraw Money?</h4>
            <p>
              Go to your <strong>Dashboard</strong> and choose either “Add Money” or “Withdraw”. We support
              UPI and all major payment methods. Withdrawals are processed instantly!
            </p>
          </div>

          <div className="help-block">
            <h4>4. My transaction failed. What should I do?</h4>
            <p>
              Don’t worry! Failed transactions are usually refunded within 24 hours. If not, contact our support team with your transaction ID.
            </p>
          </div>

          <div className="help-block">
            <h4>5. Need Live Support?</h4>
            <p>
              Use our in-app <strong>Live Chat</strong> (bottom-right) available 24/7. You can also email us at
              <strong> support@ludogame.com</strong>.
            </p>
          </div>

          <div className="help-block">
            <h4>6. Is the platform safe?</h4>
            <p>
              Yes! We use advanced encryption, fraud detection, and secure UPI gateways to keep your money safe.
            </p>
          </div>

          <div className="help-block">
            <h4>7. Can I play with friends?</h4>
            <p>
              Absolutely! Invite your friends via your referral code and enjoy private matches together.
              You can also earn rewards when they join.
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Help