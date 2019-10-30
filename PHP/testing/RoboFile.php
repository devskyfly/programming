<?php
/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see http://robo.li/
 */
class RoboFile extends \Robo\Tasks
{
    public function testsRun($suite = null)
    {
        $pipe = $this->taskCodecept();
        if (!$suite) {
            $pipe->suite($suite);
        }
        $pipe->run();
    }


    public function testsWatch()
    {
        $this->taskWatch()
        ->monitor('src', function(){
            $this->testsRun();
        })->run();
    }
}