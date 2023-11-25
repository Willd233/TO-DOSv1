import "./TodosLoading.css";
function TodosLoading(){
    return (
        <>
        <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
        </div>
         <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
         </div>
         <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
         </div>
         </>
    );
}
  export{ TodosLoading }; 