<?php
/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see http://robo.li/
 */
class RoboFile extends \Robo\Tasks
{
   public function args(array $args)
    {
        $this->say(implode(', ', $args));
    }

    public function opts($opts = ['mode|m' => false])
    {
        if ($opts['mode']) {
            $this->say('Mode set:'.$opts['mode']);
        } 
        
    }

    public function cmd(array $args, $opts = ['mode|m' => false])
    {
        $this->say(implode(', ', $args));

        if ($opts['mode']) {
            $this->say('Mode set:'.$opts['mode']);
        } 
        
    } 
}
