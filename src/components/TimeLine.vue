<template>
    <div class="content">
        timeline
        <Puzzle></Puzzle>
    </div>
</template>
<script>
import Puzzle from "./Puzzle";
export default {
    components: {
        Puzzle
    }
};
</script>
<style>
.content {
    background-color: white;
    max-width: 999px;
    height: 1000px;
    box-shadow: 1px 1px 3px gray;
    margin: 0px auto 50px;
    padding-top: 40px;
}
</style>

