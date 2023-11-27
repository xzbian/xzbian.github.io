---
layout: page
title: Nuclear Berry curvature effects
description: Investigating the interplay between Berry force and angular momentum transfer. 
img: assets/img/project2.png
importance: 2
category: work
related_publications: xuezhi_mfbc, xuezhi_angularmomentum 
---

Under the Born-Oppenheimer theory, the total molecular wavefunction is separated into electronic and nuclear components according to a mass difference. One solves the electronic stucture problem with fixed nuclear geometry and propagates nuclear dynamics on the electronic energy surfaces. 
Many intriguing effects has emerged naturally from the gauge structure introduced by the Born-Oppenheimer theory. For example, the nuclear wavefunction will experience a sign-chage during a cyclic motion around a conical intersection which is known as the molecular geometric phase effect. 

Another effect that emerges from the gauge structure is the pseudo-electromagnetic field, leading to non-trivial interaction with the nuclear degrees of freedom. 
Although often ignored in Born-Oppenheimer molecular dynamics, we found that such a pseudo-electromagnetic force (or a Berry force) applied onto classical nuclei has an important implication. 
We proved both analytically and numerically that the inclusion of the nuclear Berry force is essential for the total angular momentum conservation in BOMD. Also, the Berry force plays an important role in the angular momentum transfer process between nuclei, electrons and spin. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/bf.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption"> 
 On the left, demonstration of the methoxy radical isomerization reaction thourgh a vally-ridge inflection point. 
 On the right, real time angular momentum results from ab initio BOMD with and without Berry force. 
</div>

We have used the methoxy radical isomerization reaction as an example. By propagating ab initio BOMD on the electronic surface as computed by the generalized Hartree-Fock method with spin-orbit coupling, we show that the nuclear Berry force is important for total angular momentum conservation and angular momentum transfer.