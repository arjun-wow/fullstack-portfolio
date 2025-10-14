1.Created another branches feture/docs and feature/setup
2.resolved merge conflicts
3.practiced merge and rebase

-------------------difference between mergeand rebase----------------------------------------
In simple terms,merging ties the histories of two branches together.When you merge a feature branch back into your main branch,Git creates a new,single "merge commit" that has both branch histories as its parents.this keeps the original context of the branch and shows exactly when the two lines of work were joined.The project history is preserved exactly as it happened,showing parallel development.

Rebasing,on the other hand,rewrites history.It takes the commits from one branch and reapplies them,one by one,on top of another branch.This makes the project history look like a clean,single line,as if the work had been done sequentially,not in parallel.It results in a tidier history but changes the commit information,which can be problematic if the branch is shared with others.
