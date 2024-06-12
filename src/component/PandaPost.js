import '../component/css/PandaPost.css'
// อยากให้หน้านี้มีการตกแต่งต้องimpotมาหน้านี้ด้วย
function PandaPost(){
    return(
        <div className="panda-post">
            <div className="panda-post-bg">
                <div className="panda-post-content">
                    <img src="/pandapic/panda2.jpg"/>
                    <h4>Panda Panda</h4>
                </div>

            </div>
        </div>
    )
}

export default PandaPost;