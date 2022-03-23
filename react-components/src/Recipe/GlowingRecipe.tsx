import './GlowingRecipe.css';
type RecipeProps ={
    color?: string;
}
export function Recipe(props: RecipeProps){
    return(
        <div className="viewer">
            <div className="shadow"></div>
            <div className="bowl">
                <div className="liquid">
                </div>
            </div>
        </div>
    );
}